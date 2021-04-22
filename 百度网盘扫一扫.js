var common= require('common.js');
common.skipAids("baiduNetdisk");
common.accessibilityService();
app.launchApp("百度网盘");
// toastLog("启动跳");

threads.start(function (){
    // 我
    while(true){
        if(id("rb_about_me").exists()){
            id("rb_about_me").findOne().click();
            break;
        }
    
    }

    // 扫一扫
    while(true){
        if(id("scan_image").exists()){
            id("scan_image").findOne().click();
            break;
        }
    
    }
});

sleep(10000);
threads.shutDownAll();