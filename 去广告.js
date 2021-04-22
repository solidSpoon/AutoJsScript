var newth = threads.start(function () {
    var adId = [
        'ignore_top',// 超级课程表
         'ys_ifly_skip_btn', //超级课程表
         'countdown', // 百度网盘
        ];
    while(true){
        for (var x of adId) {
            if(id(x).exists()){
                id(x).findOne().click();
            }
        }       
    }
});
setTimeout(function(){
    newth.interrupt(); //终止去广告线程
}, 10000);
