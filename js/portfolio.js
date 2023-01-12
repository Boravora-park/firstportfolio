 //1.스크립트 위로 튕기는것
 $(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
$(function(){
    $(".menuOpen").on('click', function(){
        $(".gnb").addClass("on");
    });
    $(".close").on('click', function(){
        $(".gnb").removeClass("on");
    });
});

$(function(){
    $('svg').find('path').each(function(i, path){
        var length = path.getTotalLength();
        /* alert(length);
    }); */
});