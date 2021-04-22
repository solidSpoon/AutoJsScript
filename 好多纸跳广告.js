app.launch("com.sug3rs.manypaper");
threads.start(function () {
    var adId = [
        'skip_view',
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
    threads.shutDownAll();
}, 5000);
