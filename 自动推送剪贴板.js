auto.waitFor();

var old = getClip();
var url = "https://push.getquicker.net/push";
while(1){
    var newer = getClip();
    if(old != newer){
        //engines.execScriptFile("/sdcard/脚本/推送到电脑.js");
        http.postJson(url, {
            "toUser":"",
            "code":"",
            "data":newer,
            "operation":"copy",
        });
        old = newer;
    }
    sleep(1000); 
}