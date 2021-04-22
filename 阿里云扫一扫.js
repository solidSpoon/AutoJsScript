// auto.waitFor();
engines.execScriptFile("./无障碍.js");

app.launch("com.alibaba.aliyun");
threads.start(function (){
    while(true){
        if(id("scan").exists()){
            sleep(500);
            id("scan").findOne().click();
            break;
        }
    }

});

sleep(6000);
threads.shutDownAll();