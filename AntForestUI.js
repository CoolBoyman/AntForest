"ui";

ui.layout(
    <drawer id="drawer">
        <vertical>
            <appbar>
                <toolbar id="toolbar" title="蚂蚁森林" paddingTop="2dp" h="auto" >
                </toolbar>
                <tabs id="tabs" />
            </appbar>
            <viewpager id="viewpager">
                {/* 第一个Frame */}
                <frame>
                    <scroll>
                        <vertical gravity="center">
                            <horizontal gravity="center_vertical" padding="5 5">
                                <View bg="#4EBFDD" h="*" w="10" />
                                <vertical padding="18 8" h="auto">
                                    <linear>
                                        <Switch margin="12 0" layout_weight="1" id="autoService" text="无障碍服务" textSize="15sp" checked="{{auto.service != null}}" />
                                        <Switch margin="12 0" layout_weight="1" id="floatyService" text="悬浮窗权限" textSize="15sp" checked="false" />
                                    </linear>
                                </vertical>
                            </horizontal>
                            <horizontal gravity="center_vertical" padding="5 5">
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="待定功能1" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="待定功能的描述" />
                                </vertical>
                                <checkbox id="toutiao" marginLeft="4" marginRight="6" checked="true" />
                            </horizontal>

                            <horizontal gravity="center_vertical" padding="5 5" >
                                <View bg="#00FFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" textColor="#222222" textSize="14sp" text="待定功能2" />
                                    <text w="auto" textColor="#999999" textSize="12sp" text="待定功能1的描述" />
                                </vertical>
                                <checkbox id="douyin" marginLeft="4" marginRight="6" checked="false" />
                            </horizontal>

                            <horizontal gravity="right">
                                <button style="Widget.AppCompat.Button.Colored" id="start" text="开 始 运 行" padding="12dp" w="*" textSize="17"/>
                                {/* <button style="Widget.AppCompat.Button.Colored" id="close" text="关闭线程" /> */}
                            </horizontal>
                        </vertical>
                    </scroll>
                </frame>
                {/* 第二个Frame */}
                <frame>
                    <ScrollView>
                        <vertical marginTop="5">
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" marginBottom="2" h="auto">
                                    <text text="[发现boss设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                                    <horizontal>
                                        <text text="私信次数:" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_私信次数" text="0" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="私信boss间隔(秒):" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_私信boss间隔" text="2" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="进入发现boss页面等待时间(秒):" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_进入发现boss页面等待时间" text="1" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="话术:" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_boss话术" text="你好#hello#在嘛" color="#666666" w="*" />
                                    </horizontal>
                                    <text text="多条用#分割,随机选择一条发送" color="#D2B48C" textStyle="bold" textSize="12sp" />
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" marginBottom="2" h="auto">
                                    <text text="[私信访客设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                                    <horizontal>
                                        <text text="话术:" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_visitor话术" text="你好#hello#在嘛" color="#666666" w="*" />
                                    </horizontal>
                                    <text text="多条用#分割,随机选择一条发送" color="#D2B48C" textStyle="bold" textSize="12sp" />
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" marginBottom="2" h="auto">
                                    <text text="[抢单设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                                    <horizontal>
                                        <text text="每次抢单概率(%):" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_每次抢单概率" text="30" color="#666666" w="*" />
                                    </horizontal>
                                    <text text="(此功能概率根据个人要求设置，封号与本脚本无关)" color="#D2B48C" textStyle="bold" textSize="12sp" />
                                    <horizontal>
                                        <text text="抢单总次数:" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_抢单总次数" text="0" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="抢单延时(毫秒):" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_抢单延时小" text="600" color="#666666" w="80" />
                                        <text text=" - " textStyle="bold" textSize="15sp" />
                                        <input id="输入框_抢单延时大" text="2000" color="#666666" w="80" />
                                    </horizontal>
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card id="showHide_func4" w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <vertical padding="18 8" marginBottom="2" h="auto">
                                    <text text="[浏览设置]" color="#FFA500" textStyle="bold" textSize="15sp" />
                                    <radiogroup orientation="horizontal" >
                                        <text text="性别选择:" w="auto" textStyle="bold" />
                                        <radio id="单选框_是否不限" text="不限" checked="true" marginLeft='5' />
                                        <radio id="单选框_是否男" text="男" marginLeft='5' />
                                        <radio id="单选框_是否女" text="女" marginLeft='5' />
                                    </radiogroup>
                                    <horizontal>
                                        <text text="浏览轮数:" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_浏览轮数" text="10" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="浏览前多少个:" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_浏览前多少个" text="20" color="#666666" w="*" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="查看停留时间(秒):" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_查看停留时间小" text="1" color="#666666" w="80" />
                                        <text text=" - " textStyle="bold" textSize="15sp" />
                                        <input id="输入框_查看停留时间大" text="2" color="#666666" w="80" />
                                    </horizontal>
                                    <horizontal>
                                        <text text="每轮间隔(秒):" textStyle="bold" textSize="15sp" />
                                        <input id="输入框_每轮间隔小" text="10" color="#666666" w="80" />
                                        <text text=" - " textStyle="bold" textSize="15sp" />
                                        <input id="输入框_每轮间隔大" text="20" color="#666666" w="80" />
                                    </horizontal>
                                </vertical>
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                            <card w="*" h="auto" margin="10 5" cardCornerRadius="2dp" cardElevation="1dp" gravity="center_vertical">
                                <button id="startScript" h="auto" text="开 始 运 行" textSize="17" textStyle="bold" color="#ffffff" bg="#4EBFDD" foreground="?selectableItemBackground" layout_gravity="bottom" />
                                <View bg="#4EBFDD" h="*" w="5" />
                            </card>
                        </vertical>
                    </ScrollView>
                </frame>
                {/* 第三页*/}
                <frame>
                    <scroll>
                        <vertical>

                            <horizontal gravity="center_vertical" padding="5 5"  >
                                <View bg="#00BFFF" h="*" w="10"  ></View>
                                <vertical padding="10 8" h="auto" w="0" layout_weight="1">
                                    <text w="auto" color="#111111" size="16" text="1、需要启动无障碍服务。" />
                                    <text w="auto" color="#111111" size="16" text="2、允许app显示在其他应用的上层。" />
                                </vertical>
                            </horizontal>


                        </vertical>
                    </scroll>
                </frame>

            </viewpager>
        </vertical>
        {/* drawer */}
        <vertical layout_gravity="left" bg="#ffffff" w="280">
            <img w="280" h="200" scaleType="fitXY" src="http://images.shejidaren.com/wp-content/uploads/2014/10/023746fki.jpg"/>
            <scroll>
                <list id="menu">
                    <horizontal bg="?selectableItemBackground" w="*">
                        <img w="50" h="50" padding="16" src="{{icon}}" />
                        <text textColor="black" textSize="15sp" text="{{title}}" layout_gravity="center" />
                    </horizontal>
                </list>
            </scroll>
        </vertical>
    </drawer>
);

//设置滑动页面的标题
ui.viewpager.setTitles(["首页", "配置", "说明"]);
//让滑动页面和标签栏联动
ui.tabs.setupWithViewPager(ui.viewpager);
activity.setSupportActionBar(ui.toolbar);

//创建选项菜单(右上角)
ui.emitter.on("create_options_menu", menu => {
    menu.add("运行日志");
    menu.add("关于");
});

//监听选项菜单点击
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "运行日志":
            app.startActivity("console");
            break;
        case "关于":
            alert("关于", "仅供娱乐");
            break;
    }
    e.consumed = true;
});

// 用户勾选无障碍服务的选项时，跳转到页面让用户去开启
ui.autoService.on("check", function (checked) {
    if (checked && auto.service == null) {
        app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
    }
    if (!checked && auto.service != null) {
        auto.service.disableSelf();
    }
});

// 当用户回到本界面时，resume事件会被触发
ui.emitter.on("resume", function () {
    // 此时根据无障碍服务的开启情况，同步开关的状态
    ui.autoService.checked = auto.service != null;
});

ui.emitter.on("back_pressed", (e) => {
    e.consumed = true;
    dialogs.confirm("是否退出？").then((result) => {
        if (result) {
            ui.finish();
        }
    });
})

initializeRightMenu();
initializeData();

function initializeRightMenu() {
    ui.menu.setDataSource([
        { title: "更新日志", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC8klEQVRYR82XT2sTQRjGn3cTaG8mG28eqrATEQ8NePIiFRFURCoigohWVOxORNtP0PQTmKKZHEQoRQQtUpQigmjrBxDqRbGzYj140kziLaXpjszalDSm+bOxxDkF8s7z/N5535nZIfR4UI/90RTAFvJpN4Da1zPFW8n5ZhoNAezc5wzIugngdjcAAE4S4UjBZc52Oo0BhPyuONvTpXkwfff9L0ltrY8XeNJtpPcXwMayzyrOZv8FgNGIC7lQ5OxozwBsId8ozo71EGD5teLJ410BxPKf9qLcXwpE+suxkntgpSoYyy2nQLRri8Fq9ENpfF8Qb+flK+WyE10BJIRc1KABQBvRlOJss39sIZcADNYZjCvOsgGAkC8VZ6dCAZjsLKIrAMbqBLIW4flPly22alZbePOKO6dDASSEN6yh5wB881ejKSNi9VWM6SA0JlWaZVoBJIR8UeDsTCiAjSXUBLwrcDb0p6ZeFlrf8VejcVPnViWIC2+uyJ2zoQDsnMyAMBFM1nqMNK1oC9MAYiCaUq4zZsoUtShWa1ApR5c2m1B4zxR3zoUCiN39Gov2V1K+DkwHNkR+EWhkndaWanfDdqWw83JWuex8KIDqJFssT4OsEnxdAmFYcRb0Q7UkWustuyBCmKw2qJ2TT1SaXegKoFmjmTIRIegPM3xCKQJkNwHy3mPlOhd3DKDlLsjLRwWXXQoFkMgtj2jLHECdDb8cnao2YVzImSJnl0MB2EKaI7djANL6aiGdNI0L0z+KJ0dCAXSWd+NoOy8fKpdd6x2A8B4o7twIBWALaS6frTdde8tScxl1AdDolGvHv+4kDL8C7Zi1irG7KUEr8Xb+j+fk+2KaHQrVA+0YNIsxH6SkdR+IDsPCQTXKPtbG7+hnefC+AKDS+zOxe3LIsvwh87s1QF5OQGO07YeJBU0+VXzQGpFfIdBawXXeGqNEXnrrFVy3IliIaGI/0o7XEqAaUM0gTBlqMzU69ZlXNf/vx2mYzDud8xtjzpswrqCXXwAAAABJRU5ErkJggg==" },
        { title: "检查更新", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADnUlEQVRYR+2WTWgcZRjHf890k6KoTQ8F6xcRRcXWj9DubKmXFLQoRCtCg1KwTYspFrzYmJ3RwzYHs7PRXvSgCW20wQ9owWDAQ6jS3NZMElqKGkKbUhE/etBCDqE2yTwy484yHbLZ2cS2F9/bzPs8//+f//O8z/sKN3nJTebnfwE1O5Ap6DOesl3gceAJgQWFCWBShG9Hs3KylrImFmDm9RDCC0BTFYLTKEOuLYeSCEkkwCxoDiUO+AfwO+AJrFe4K0Y46FryUjURVQVkHD2p8HQIpEKf4dE3aotve3ll8rrJM2gXpT3y+xvXkpalRCwpwCxoD8pbJYApPNrct6W4FKDZoy3i0Vt2RHjdzcrHlXIWFZA+rPfKPDtQPiwlXnItubOandF909FzwIPBP+ENTfH12EH5JY5xjYDNeW0SoVMImu3WcrDS6tpyohYBfklUGI/kzCoMGcr70fKVBfjHS5VPgLujRH7Nx7KyvxbyMDbt6CmB5miuwG8Ke11Lhv81B9ic12ZDOBUJPIrBd6tSDBfflL+WQx7mPJnThvrVNCO0IrwS/veUbeO2jAQCokoNYcf3WRlaCWml3IyjHQrv+fsKI2OWbJPSgMmVkj5yLTlwPchDzExe21XoDb6VLkk7+qXAyygzri1rrid5iG06OgPcDgyK6egU8BDwo2vJxhshIO3opMAjwLSYBb2M0oBSdG3ZeiMEmI76w2yL77rvwCDwInDRteT+WgXs2pW7Y9Utc40DR7rPJs01Hf0ZuA8Y9h3IojjAVUnRNNohPyUFamuzH/UMjgMbVLVroN+pegNuyWujJ/hlrw+aMJPX7SoEQ6GWPoiSBwNFtfPTfic4Ykut2HB6NpgDpqP+uX++lHh6wWDnRKdMVwKKkyucGDiab61CvFXgc6CxFNfjWpINBDz3ga7+c5YrEYBZFT7Do4jHmbF35Ey4FyefT60ZmWrMdlUiF+EeEZ5C2RvYXloLa6mf2C9z5bugqVvX1Rt8Eb37w2BJsSHsjd37bH9kB/N95rbH+HV9ebpWcz/cn/SUlnFbLgSli2elC3pAlNf8xgLqgqCIgFf32ccFdtYo4KrCDyJ85Wbl3ShnxQfJpl6tkxkerpvnStGW88stQcrg0tw05yf6ZG4xi6o+yRZLWk4TVuyRpIWLx8VFoHL4WH93R614y3JgsXIkHURxgSsS4IPt2ZNr0NTfDxw74lzzSk7qxIoFJCX6z3tgpcRh/j9lvlrSBRsylQAAAABJRU5ErkJggg==" },
        { title: "教程", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAgCAYAAACLmoEDAAAD4ElEQVRYR+1YXWgcVRg9350UpQ91d5NspIhE3UmqghQS3QqKqaDQ6osgYhUK+mBxkpYWoXlRqNSH4oMVutm2YlX6WKWiD33og11FSJEGxAdLMhsLFtLuJp0NrURMM/fIXXZkMk3qTEeDlVy4cO/wfec797vn/swVhErmkDsgFp4RIG8qyS4A+VY1lnVTRaRGoG6qCL7DdYx6u+yrAVTm4IWMdcf8gIZ6NC1WmJ+YTrb8yyOA/4kAfQBOE6gJ2CSkiGltWXUsAErYQaBThJ1sDkLyAJ8DMEWo/Q3ngSO5I+5D0DgB4GEA3wBSJ/S0gqoTvEzhZYille/ntaCzmRRIlwAmMc8CuKh9bJ/daVfCRE1bug5X89fJGsCPKOr4gvLHr+3onYkaLtVff/Tc2jl9V68FeZnkXhFsJ3Ec1O9S1pxsOPf/FAcnsGkvTRSp8Dogb6wR6aq9WTAz+VeRXNn9AsBaz7G3JgGO2ubK7gmQWyHqZ88pPJYS6xSAOc+xX4yS/VUo718ZLJTSBGgvVd+m4n6A73lOzzupsEaqQxTu9Rz73ihZah+bl9JIkoCZkrtbKRzUGntmh+wPk/hGbc1CVxbOeI7dXFNBMTK4gawxjhssGGQQIDrwNFixyGbL7hkBYhEOAJcja5IRZ+AEKg3H3mxsE2U2DvhyU/ePSCqJDFbJJshAIhkYzcbFjuosKoM0WLEX2G1DNi7RsN1yu0EarFiZTRPgf70bmItUkJzg4pJ4gd3sUIhOT3gjT5rZjtJkj1Z6XEH6Z5zCWOJD4e+OyKXuEbeq2dRkV0KzweCisczMmG+xLzIrRlbpAQLtImrIXP5BXtJaNf8Q/lNkg4TcFjIIk6XSuwVy7JYW2ErI4GYxEm1dq2QTZGDZzGbLrqvI4SuDPScT4N1gmi27wwIcAPRbntP7QSqskcltInrEc+xcGEdy5YmjZsvwBnv3RQN0lKt9PtAn9NcD1m+iWKNGTc+3/TC7577ZsH1uxD0mgldJfSCK1f3phTuv/r6wkeBGIe8O/AhVb4Ocnh4sVBdjje+jqOcbjt2/iGy2XN0i4CmIfCb0vyLUUwSebL3OGNspAhMtp3sEKLTaPwKoCPS3GvK0QHaC/BIiLxA8pIgKRbZA8ASIDS2fCQJTpi2CB8HmK4wpZ0GMao2vlcVt5pEDwEueY3++iKzp5MqTrwF8BaB5nBgF9VmqtnOWssZmdnRfCjus+/hizpr/oyj0ixC1CcDjANYZgg2nZ1cIq5+QihDfa82xtjl/bGZ4w7UwVubw+W6lVRFQRShsAptYMC86S830ov/yNDpbCd9Vsv9Wlv8E0mP+P0I4oqkAAAAASUVORK5CYII=" },
        { title: "关于", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAE3ElEQVRYR61Xa4hUZRh+3jOrK1G7M2fGtIug654xS1IqSIpCKKlMtCL3RyCx5YU940oKJmSQCxoUhOU232Sp+K/UH1mkGRiKGV0oumDFzhnTMipx58xgCO26c574zjmj42Vmzkrn38z3vO/7fO/9E0T8EluOtRuet4DkQoF0EEgBkgzEWRRgkEBePG+nnOWBwbW3/BNFtTQDJbP56RDpJfAUgPZm+PC8JMB7IPuLmfQvjWQaEkjk8huE0gugLVRyBsAXAhwmcYpi/K3/F3oTRTCB4D0QmQtibBVPYX+pJ/1iPRJ1CZjK2QVgkS8o8qlHbi6nhvaja8Zwoxu1bT1pxoaHngS4TIA7wxB95trp+68kd0UCpiocBzg5FFjq2tbWiK6/CJZQhWUCbglJDLp2evylei4jYKr8aUBSfmohNrNkd/x4NcarMglVeETAfcFvOeHanVNq9V1EwFT5w4DcpwGubTVN0NEQM5XDEL/bta2uqux5I2HCrQtuLvNKdufHUQyYbzm3soI59PBzudc6VE8moX69XVD5wdcv3FhNTJ+ALjWKfBlme+SYj88evbYirVruNt8wvT43M219PRKmcpYAeAfAGSFn6xINCChHEejR2e72dD4Y5eYaE+935hgxHLyAp+va6bA5XVmLmSscAPmAALmibdk+AVM5vwOY5AELy7b1YVQC120ZSI2pGKfP40V2uD2d3Y3k48pZYAAfAPjTta2bJJ49PsuQke8AlN1TQxPQ17jOL1VuKmeRAIsJDrh2ek1T8ruOjjUHWzXpNhHvbknmCitJvkHInpLd+XhTBf8DwFTOfgAPgVgtZtbZBsEzAqwr2tbLo9Xf/qZzhxBtjSrgUp1J5bxAYCOI7WIq5wiAe0EscTPWtqgEJuQK1w97XAXBKgFam1VArV4z6zwLge6un2sCOh4pwphfsqfujUIgofKbBaJ7+8wafJdrW7ujyR97VOB9BGBw1AT8IUW2VCqyJtaCQtWgERtz4+DyyX+NhgCJ01cdgnY10BGDcSzonPi2ZFt3RTHul30YAgKHrjoJE+q8G5t2wHpJSELpMlxBsh/gXtdOz496i4QqrBHw1aAFjy6Bq2UoZLfoYQIPP0EwPDJm3A1nlkxyo5Aws/m9EJnnYwUPuz3WJ4lcYQb/jf1RXjWlXFdHTSPyZGRKtRUf1QOFkOUlu/PtSASUcw5AS0BAdoDeOAF3Fu1pexrJJ9XAY4TxPsiv3Ex6djgNC+so3BA1mXQPOEeeqjVEcm0pkw5CUueLbzoeN1pH9PCaVb1s4IHNThtaoMfq9CheiGfzswwRrSgOcICM9ZUyU99t5jlTOZsAPFd70ZqFxOkRQgU51Xwh0aNYY6O2YFPluwHZ7keM7C5m0juC9Kn5ajfh/3MlM5UzG4AeQPpdsdW1raVVs5cvpVnnJAQ3R/VEM7fr84RyDgqgPfa158W6yis6fqtLIBT45sJOj9e9oZa+hqXVhIWZHVgPMV4KLsX+kp1e2ZCAPkzmCq+QfD4Efi/w+oqpc/uaPUzqcTGVsxrAa+H5bncEi7HSGmq4eiez+Sc8kd7QfVr2sqcZK97ZKGHwE67Fmyg0gmohj1SET0fa/f1tVtAFYm5UY1Fw/jCKAqxizGxhkgALabCDREpEkiSvGY2OWqyInPgPdzcwBtuCmgYAAAAASUVORK5CYII=" },
        { title: "退出", icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADd0lEQVRYR+2XS4hcRRSGv7o9pnHR4/TtnoVBhJDUBE2UiLrxEaISV+LCx+DaxBiqJxGi4iNrxQhGzKTLCYLiwoWOsxIRA5r4wo34IFEmXRnduFFmqmOycYaZKqmem9jT3u7b3bZkY8GFpuucU9/969SpcwWXeYjLvD59A8TarAR4W168kvGtS/2+yL8B8AlA/j8DKGmjF5RUaW8Xa9MRoKhrR+pqbH+WMqkKFI/NXcuKe1vADqtkqk1Jmz895G15MVWBBPBjrmC3fUz+2g4kNXiszSfA3UDNKrk5zbkLgNPAFuBTq+Q9XQMUtXlGwEvABbfC/ef2yZN9AUyZ63G8FyA8PFtX8lBanDUKjFR/2RaJ5c+BAvhHrRp7qx15lgLBb+R1c1PkCfG880Pbz1U2fN8abw1ArM0rwAFg2io53imBugEI/iVtnvPwInDYKvlkW4Dhw6fjofy6UwixPoqiW+f3bvxmEAAhRlyt/QzklxeXbjh/YKttjntJgWLVKCGoAu9aJR/JOj7dKtAA0OYNYLf3VOoVqVMBYl07BmKPJ7qvrjZ+OEiAkUmzI8pxAs+btiJ3pSugzYlw7kVu6LqFxzfMZgFkFaJm//LRuTEXuTPAV1bJO9ptwe9CMBrlR4bnd41eGCjAodmCK+TOA/NWydE2W2CCQYFlrrL7ZfjdccTaLCZ3QSHrLoiPmGGG+CPUFqvkcDuAINEYEVvsXvlTFkAv8/FqUfoxrbL+fQqSHADGrZLTvSyQZVuq1h7wQsx4OFlX8q5UBUraVDwc7aYIZS3YOl+smkkhmBBwcEHJUJQujSYFZm8U5H5ozDhusxPy614XSrNP9v8zYFtagWstxe8DDw5ShVjXXgbxNDBjlXyoFXINQFGfuVMQhcsDvHjKVjaFu6HvEU/VduLE8UY43Pa62vxFR4AwGToZgdjXOGJtmpFuiS4Wq3AZ1ZU8mOaX3hFpYwRsShx6PhWxNg9DoxcI4x/VLzUJW+libb4Ebk/+n8bxalZilvXZmx1uT7hTVmXnbF1J2Umxjl1xUZsXBDzfFOAjL3hHCL5jidU+bx3X4BqtV3jr8KymEH6y76a0mThJzCeS09HN9s943GtpCdd1DqQZlqfmbvHO3etgp4D1wNWAEILfvG88H+Q8x+cn5LfdUF606fvDpJdF+s6BQS3yP0AnBf4C4vh6MKas2UAAAAAASUVORK5CYII=" }
    ]);
    ui.menu.on("item_click", item => {
        switch (item.title) {
            case "更新日志":
                alert("待完善···");
                break;
            case "检查更新":
                alert("待完善···");
                break;
            case "教程":
                alert("待完善···");
                break;
            case "关于":
                dialogs.build({
                    title: "关于",
                    positive: "确定",
                    items: ["蚂蚁森林纯属个人爱好，如果涉及到侵权请通知作者，作者会尽快解决相应问题。作者邮箱：237106102@qq.com"]
                }).on("show", (dialog) => { }).show();
                break;
            case "退出":
                ui.finish();
                break;
        }
    });
    //让工具栏左上角可以打开侧拉菜单
    ui.toolbar.setupWithDrawer(ui.drawer);
}

/**
 * 初始化UI和数据
 */
function initializeData() {
}

ui.start.on("click", function () {
    //程序开始运行之前判断无障碍服务
    if (auto.service == null) {
        toast("请先开启无障碍服务！");
        return;
    }

    // //禁止音量键调节音量
    // events.setKeyInterceptionEnabled("volume_up", true);
    // //开启按键监听
    // events.observeKey();
    // //设置监听
    // events.onKeyDown("volume_up", () => {
    //     toastLog("脚本停止");
    //     exit();
    // })

    main();
});

function main() {
    // 脚本的主逻辑
    threads.start(function () {
        engines.execScriptFile("./AntForest.js");
    });
}