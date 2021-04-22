auto.waitFor();
app.launch("com.tencent.qqpimsecure");

// 跳广告
threads.start(function () {
    // 跳广告控件列表
    var adId = [
         'ja',
         
        ];
    while(true){
        for (var x of adId) {
            if(id(x).exists()){
                id(x).findOne().click();
            }
        }       
    }
});

threads.start(function (){
    // 我
    while(true){
        if(id("awy").exists()){
            id("awy").findOne().click();
            break;
        }
    
    }

    // 扫一扫
    var qqsec = className("android.widget.FrameLayout").clickable(true).depth(14);
    while(true){
        if(qqsec.exists()){
            qqsec.findOne().click();
            break;
        }
    
    }
});

sleep(15000);
threads.shutDownAll();