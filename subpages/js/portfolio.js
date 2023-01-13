// 외부변수선언
var fixedNum_first = $("section.main").offset().top;
var fixedNum_second = $("section.concept").offset().top;
var fixedNum_third = $("section.end").offset().top;

/* ====스크롤값을 불러오는 함수 시작==== */
$(window).resize(function(){
    $(document).on("scroll resize", function(){
    // 스크롤탑값 변수
    var scrollTop = $(document).scrollTop();
    // console.log(scrollTop);
    if(scrollTop >= 0){
        $("h2.title").addClass("on");
    }
    if(scrollTop > fixedNum_third){
        $("h2.title").removeClass("on");
    }
});
}).resize();


//스크립트 위로 튕기는것
    $(document).on('click', 'a[href="#"]', function(e){
        e.preventDefault();
    });
//splitting
    $(function(){Splitting();});

//gnb
    $(function(){
        $(".menuOpen").on('click', function(){
            $(".gnb").addClass("on");
        });
        $(".close").on('click', function(){
            $(".gnb").removeClass("on");
        });
    });
//scrolla animation
    $(function(){
        $('.animate').scrolla({
            mobile: true,
            once:false
        });
    });
//svg 애니메이션
    $(function(){
        $('.main .inner svg').find('path'/* ,'polygon' */).each(function(i, path){
            var length = path.getTotalLength();
            console.log(length);
        });
    });


/*     $(document).on("scroll resize", function(){

        var scrollTop = $(document).scrollTop();
            console.log(scrollTop);

        fix();
        function fix(){
        if(scrollTop >= 0){
            $("#title").addClass("on");
        }else{
            $("#title").removeClass("on");
        }if(scrollTop < 7000){
            $("#title").removeClass("on");
        }
        };
        });

    if($(window).width()<=1440) {
    $(document).on("scroll resize", function(){

    var scrollTop = $(document).scrollTop()

    fix();
        function fix(){
        if(scrollTop >= 0){
            $("#title").addClass("on");
        }else{
            $("#title").removeClass("on");
        }if(scrollTop < 5200){
            $("#title").removeClass("on");
        }
        };
    });
    }
    if($(window).width()<=680) {
    $(document).on("scroll resize", function(){

    var scrollTop = $(document).scrollTop()

   fix();
        function fix(){
        if(scrollTop >= 0){
            $("#title").addClass("on");
        }else{
            $("#title").removeClass("on");
        }if(scrollTop < 5300){
            $("#title").removeClass("on");
        }
        };
    });
    } */