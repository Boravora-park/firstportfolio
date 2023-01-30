// 외부변수선언
var fixedNum_first = $("section.main").offset().top;
var fixedNum_second = $("section.clonecording").offset().top;
var fixedNum_third = $("section.renewal").offset().top;
var fixedNum_forth = $("section.test").offset().top;
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

    
    $(function(){
    $("body").on("mousemove", function(e){
        var posX = e.pageX/150; 
        //변수posX에는 현재 화면상의 마우스커서의  X축의 위치
        var posY = e.pageY/150; 
        //변수posY에는 현재 화면상의 마우스커서의  Y축의 위치를 저장하고 이때 해당수치의 
        //변화폭을 줄이기위해 각각 수치를 줌(50~150정도까지 적용해볼것)
        $(".circle1").css({"right":0-posX, "top":700-posY});
        $(".circle2").css({"left":50-posX, "top":150-posY});
        $(".circle3").css({"left":50-posX, "top":800-posY});
    });
    });
