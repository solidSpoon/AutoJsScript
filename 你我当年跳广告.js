auto.waitFor();

app.launch("com.bigwinepot.nwdn");
//启动一个无限循环的线程
var thread = threads.start(function(){
    while(true){
        if(className("android.view.View").text("跳过").exists()){
            className("android.view.View").text("跳过").findOne().click();
            break;  
        }
    }
});


//5秒后关闭线程
sleep(5000);
thread.interrupt();