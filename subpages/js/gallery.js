// 외부변수선언
var fixedNum_first = $("section.main").offset().top;
var fixedNum_second = $("section.clonecording").offset().top;
var fixedNum_third = $("section.renewal").offset().top;
var fixedNum_forth = $("section.ncs").offset().top;
var fixedNum_fifth = $("section.end").offset().top;

    //console.log(fixedNum_second);

/* ====스크롤값을 불러오는 함수 시작==== */
    $(window).resize(function(){
        $(document).on("scroll resize", function(){
        // 스크롤탑값 변수
        var scrollTop = $(document).scrollTop();
        // console.log(scrollTop);
        if(scrollTop >= fixedNum_first){
            $("#title").addClass("on");
        }
        if(scrollTop >= fixedNum_forth){
            $("#title").removeClass("on");
        }
        if(scrollTop >= fixedNum_fifth){
            $("#title").removeClass("on");
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


