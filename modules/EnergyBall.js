let SysConstant = require('../constant/SysConstant.js');
let SettingConstant = require('../constant/SettingConstant.js');

let settingsStorages = storages.create(SettingConstant.SETTINGS_STORAGE);
let checkRemainingTimeSetting = settingsStorages.get(SettingConstant.CHECK_REMAINING_TIME_SETTING) || {};
let checkMyRemainingTimeSetting = settingsStorages.get(SettingConstant.CHECK_MY_REMAINING_TIME_SETTING) || {};

function EnergyBall() {
}

EnergyBall.MAX_RADIUS = SysConstant.DEVICE_WIDETH / 8 / 2;
EnergyBall.MIN_RADIUS = SysConstant.DEVICE_WIDETH / 10 / 2;
EnergyBall.REGION_Y = SysConstant.DEVICE_HEIGHT * 0.2;
EnergyBall.REGION_H = SysConstant.DEVICE_HEIGHT * 0.3;

/**
 * 找到能量球
 */
EnergyBall.findEnergyBall = function () {
    // 截图
    let screenImg = captureScreen();
    // 灰度化图片
    let gray = images.grayscale(screenImg);

    // 找能量球
    let energyBallArr = images.findCircles(gray, {
        region: [0, EnergyBall.REGION_Y, SysConstant.DEVICE_WIDETH, EnergyBall.REGION_H],
        dp: 1,
        minDst: EnergyBall.MIN_RADIUS,
        param1: 40,
        param2: 50,
        minRadius: EnergyBall.MIN_RADIUS,
        maxRadius: EnergyBall.MAX_RADIUS,
    });

    // 回收图片
    gray.recycle();

    //还原能量球的Y轴数值
    energyBallArr.forEach((energyBall) => energyBall.y += EnergyBall.REGION_Y)

    return energyBallArr;
}

/**
 * 收集能量
 */
EnergyBall.collectEnergyBall = function () {
    let energyBallArr = EnergyBall.findEnergyBall();

    //收集能量
    energyBallArr.forEach(eneryBall => click(eneryBall.x, eneryBall.y));
}

/**
 * 收集自己的能量
 */
EnergyBall.collectMyEnergyBall = function () {
    console.log("收集自己的能量");
    EnergyBall.collectEnergyBall();

    //#region 检测自己能量的剩余时间
    if (checkMyRemainingTimeSetting.enabled) {
        sleep(1000);

        console.log("检测能量球剩余时间");

        while (true) {
            let remainingTimeMin = 60;

            let energyBallArr = EnergyBall.findEnergyBall();

            if (energyBallArr.length > 0) {
                //导入插件
                let ocr;
                try {
                    ocr = $plugins.load("com.hraps.ocr");
                } catch (error) {
                    return;//没有ocr插件，直接结束
                }

                let cs = captureScreen();

                energyBallArr.forEach(energyBall => {

                    //裁剪出能量球图片
                    let ballImg = images.clip(
                        cs,
                        energyBall.x - energyBall.radius,
                        energyBall.y - energyBall.radius,
                        energyBall.radius * 2,
                        energyBall.radius * 2
                    );

                    results = ocr.detect(ballImg.getBitmap(), 0.8)
                    //识别结果过滤
                    results = ocr.filterScore(results, 0.5, 0.5, 0.5)

                    if (results.size() == 2 && results.get(0).text == "还剩") {
                        let timeStr = results.get(1).text;
                        console.log("能量球剩余时间【" + timeStr + "】");

                        if (parseInt(timeStr.substring(0, 2)) == 0) {
                            let remainingTime = parseInt(timeStr.slice(-2));
                            if (!isNaN(remainingTime) && remainingTime < remainingTimeMin) {
                                remainingTimeMin = remainingTime;
                            }
                        }
                    }

                    ballImg.recycle()
                })

                //循环收集自己的能量，收集完重新检测剩余能量
                if (remainingTimeMin == 1) {
                    for (let time = 60; time == 0; time--) {
                        EnergyBall.collectEnergyBall();
                        let remainbBallArr = EnergyBall.findEnergyBall();
                        if (remainbBallArr < energyBallArr) {
                            break;
                        }
                    }
                    continue;
                }
            }

            if (remainingTimeMin < 60) {
                addDisposableTask(remainingTimeMin);
            }

            break;
        }
    }
    //#endregion
}

/**
 * 遍历朋友排行榜
 */
EnergyBall.traversalFriendRanking = function () {
    let collection = {
        collect: false,//是否收集
        remainingTime: 61//朋友能量剩余时间
    };

    let rankingList = className("android.webkit.WebView").findOne();

    let indexTemp = 0

    while (true) {
        let friendList;

        let listViews = className("ListView").untilFind();
        let listView0 = listViews.get(0);
        let listView1 = listViews.get(1);

        if (listView0.bounds().top > listView1.bounds().top) {
            friendList = listView0.children();
        } else {
            friendList = listView1.children();
        }

        let cs = captureScreen();

        for (let index = indexTemp; index < friendList.length; index++) {
            indexTemp = index;

            let friend = friendList[index];

            //处于屏幕底端时向下滚动屏幕
            if (friend.bounds().bottom == SysConstant.DEVICE_HEIGHT) {
                rankingList.scrollDown();
                sleep(1000);
                break;
            }

            let energyBall = judgingCollectable(cs, friend);

            if (energyBall.collectable && !energyBall.remainingTime) {
                //收集朋友能量
                EnergyBall.enterFriendHomepage(friend);
                cs = captureScreen();
                collection.collect = true;
            }

            //记录最小的剩余时间
            if (energyBall.collectable && energyBall.remainingTime && energyBall.remainingTime < collection.remainingTime) {
                collection.remainingTime = energyBall.remainingTime;
            }

            //当存在剩余时间在1分钟内则强制设true，让脚本循环查看排行榜
            if (energyBall.collectable && energyBall.remainingTime && energyBall.remainingTime == 1) {
                collection.collect = true;
            }
        }

        if (indexTemp + 1 == friendList.length) {
            break;
        }
    }

    return collection;
}

function judgingCollectable(cs, friend) {
    //找收集标识
    let fb = friend.bounds();
    let collectableLogo = null;
    friend.children().forEach((view) => {
        if (fb.top == view.bounds().top && fb.right == view.bounds().right) {
            collectableLogo = view;
        }
    })

    //收集标识不存在，类似需邀请的好友
    if (!collectableLogo) {
        return { collectable: false };
    } else {
        //判断是否有能量收集
        let collectableLogoBounds = collectableLogo.bounds();
        let logo = {
            x: collectableLogoBounds.left,
            y: collectableLogoBounds.top,
            weight: collectableLogoBounds.right - collectableLogoBounds.left,
            height: collectableLogoBounds.bottom - collectableLogoBounds.top
        }

        let point = findColorEquals(cs, -14835603, logo.x, logo.y, logo.weight, logo.height);

        if (!point) {
            return { collectable: false };
        } else {
            let remainingTime = collectableLogo.text()

            if (remainingTime == "") {
                return { collectable: true, remainingTime: null };
            } else {
                //返回可收集能量的剩余时间
                return { collectable: true, remainingTime: parseInt(remainingTime) };
            }
        }
    }
}

/**
 * 进入好友主页
 * @param {} friend 
 */
EnergyBall.enterFriendHomepage = function (friend) {
    //进入好友主页
    friend.clickCenter();
    text("点击展开好友动态").waitFor();
    sleep(500)

    let title = id("h5_tv_title").findOne()
    let friendName = title.getText().slice(0, -5);
    console.log("收集好友【" + friendName + "】的能量");

    //收取能量
    EnergyBall.collectEnergyBall();

    //返回排行榜
    back();
    text("排行榜").waitFor();
    sleep(500)
}

/**
 * 收集好友能量
 */
EnergyBall.collectFriendEnergyBall = function () {
    console.log("收集好友能量");

    let collection = {
        collect: true,
        remainingTime: 61
    };

    //循环收集能量，直到没有能量收集
    for (let index = 1; collection.collect; index++) {
        console.log("第" + index + "次遍历排行榜");

        text("查看更多好友").findOne().parent().click();

        text("排行榜").waitFor();
        sleep(500)

        collection = EnergyBall.traversalFriendRanking();

        back();
    }

    if (collection.remainingTime < 61 && checkRemainingTimeSetting.enabled == true) {
        addDisposableTask(collection.remainingTime);
    }

    text("种树").waitFor();
    sleep(500)
}

function addDisposableTask(remainingTime) {
    let nextTime = new Date().getTime() + remainingTime * 60 * 1000;

    let existingTask = $timers.queryTimedTasks({})
        .filter(t => t.timeFlag == 0 && files.getName(t.scriptPath) == "AntForest.js")
        .some(t => t.millis < nextTime + 60 * 1000 && t.millis > nextTime - 60 * 1000);

    if (!existingTask) {
        nextTime = new Date(nextTime);

        let task = $timers.addDisposableTask({
            path: files.cwd() + "/AntForest.js",
            date: format(nextTime, "yyyy-MM-ddThh:mm"),
        })
    }
}

function format(time, fmt) {
    var o = {
        "M+": time.getMonth() + 1,                 //月份 
        "d+": time.getDate(),                    //日 
        "h+": time.getHours(),                   //小时 
        "m+": time.getMinutes(),                 //分 
        "s+": time.getSeconds(),                 //秒 
        "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
        "S": time.getMilliseconds()             //毫秒 
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
}

module.exports = EnergyBall;