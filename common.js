importClass(android.content.Context);
importClass(android.provider.Settings);

var skipAids = function (name) {
    threads.start(function () {
        toastLog("启动跳广告");
        // 跳广告控件列表
        var baiduNetdisk = [
            'countdown',//百度网盘
            'ad_close', //百度网盘
        ];
        var unicomBusinessHall = [
            'tt_splash_skip_btn'// 联通营业厅
        ];
        

        while(true){
            for (var x of name) {
                if(id(x).exists()){
                    id(x).findOne().click();
                    toastLog(id(x));
                }
            }       
        }
    });
};

//无障碍
var accessibilityService = function(){
    try {
        var enabledServices = Settings.Secure.getString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES);
        log('当前已启用的辅助服务\n', enabledServices);
        var Services = enabledServices + ":org.autojs.autojspro/com.stardust.autojs.core.accessibility.AccessibilityService";
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ENABLED_ACCESSIBILITY_SERVICES, Services);
        Settings.Secure.putString(context.getContentResolver(), Settings.Secure.ACCESSIBILITY_ENABLED, '1');
        toastLog("成功开启AutoJS的辅助服务");
    } catch (error) {
        //授权方法：开启usb调试并使用adb工具连接手机，执行 adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTING
        toastLog("\n请确保已给予 WRITE_SECURE_SETTINGS 权限\n\n授权代码已复制，请使用adb工具连接手机执行(重启不失效)\n\n", error);
        setClip("adb shell pm grant org.autojs.autojspro android.permission.WRITE_SECURE_SETTINGS");
    }    
}
exports.skipAids = skipAids;
exports.accessibilityService = accessibilityService;