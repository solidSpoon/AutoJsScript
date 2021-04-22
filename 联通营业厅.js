auto.waitFor();
app.launch("com.sinovatech.unicom.ui");

// 跳广告
threads.start(function () {
    // 跳广告控件列表
    var adId = [
        'tt_splash_skip_btn'
        ];
    while(true){
        for (var x of adId) {
            if(id(x).exists()){
                id(x).findOne().click();
            }
        }       
    }
});

sleep(10000);
threads.shutDownAll();