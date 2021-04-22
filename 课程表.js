// auto.waitFor();
engines.execScriptFile("./无障碍.js");


app.launch("com.xtuone.android.syllabus");

// 去广告
threads.start(function(){
    var adId = [
        'ignore_top',// 启动页
         'ys_ifly_skip_btn', // 启动页
         'course_ad_close_layout'// 课程表页
        ];

    while(true){
        for (var x of adId) {
            if(id(x).exists()){
                id(x).findOne().click();
            }
        }       
    }
});

threads.start(function(){
    while(true){
        //课程表界面
        if(id("rbtn_tab_course").exists()){
            id("rbtn_tab_course").findOne().click();
            break;
        }    
    }
});

sleep(15000);
threads.shutDownAll();