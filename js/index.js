// 외부변수선언
var fixedNum_first = $("section.intro").offset().top;
var fixedNum_second = $("section.hobbies").offset().top;
var fixedNum_third = $("section.like").offset().top;
var fixedNum_forth = $("section.portfolio").offset().top;
var fixedNum_fifth = $("section.end").offset().top;

    console.log(fixedNum_second);
/* ====스크롤값을 불러오는 함수 시작==== */
    $(window).resize(function(){
        $(document).on("scroll resize", function(){
        // 스크롤탑값 변수
        var scrollTop = $(document).scrollTop();
        // console.log(scrollTop);

        // intro
        if(scrollTop >= fixedNum_first){
            $(".fix .page.page.bahn").addClass("on");
            $(".fix .page.page.bahn .num").text("01/");
            $(".fix .page.page.bahn .text").text("intro");
        }
        // hobbies
        if(scrollTop >= fixedNum_second){
            $(".fix .page.page.bahn .num").text("02/");
            $(".fix .page.page.bahn .text").text("hobbies");
        }
        // likes
        if(scrollTop >= fixedNum_third){
            $("#top").removeClass("on");
            $(".fix .page.page.bahn .num").text("03/");
            $(".fix .page.page.bahn .text").text("likes");
        }
        // portfolio
        if(scrollTop >= fixedNum_forth){
            $("#top").addClass("on");
            $(".fix .page.page.bahn .num").text("04/");
            $(".fix .page.page.bahn .text").text("portfolio");
        }
        //footer
        if(scrollTop >= fixedNum_fifth){
            $("#top").removeClass("on");
            $(".fix .page.page.bahn .num").text("05/");
            $(".fix .page.page.bahn .text").text("footer");
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

//main
//hobbies
    $(".hobbies .inner .text .nw .hobby").mouseover(function(){
        $(this).addClass("on").siblings().removeClass("on");
    $(".hobbies .inner .text .nw .hobby").mouseleave(function(){
        $(".hobbies .inner .left ul li").removeClass("on").siblings().removeClass("on");
    });

        if($(this).hasClass("bk1") === true) {
            $(".hobbies .inner .left ul .ho1").addClass("on").siblings().removeClass("on");
        }
        if($(this).hasClass("bk2") === true) {
            $(".hobbies .inner .left ul .ho2").addClass("on").siblings().removeClass("on");
        }
        if($(this).hasClass("bk3") === true) {
            $(".hobbies .inner .left ul .ho3").addClass("on").siblings().removeClass("on");
        }
        if($(this).hasClass("bk4") === true) {
            $(".hobbies .inner .left ul .ho4").addClass("on").siblings().removeClass("on");
        }
    });

//portfolio
$(".cording li").hover(function(){
    $(this).addClass("on").siblings().removeClass("on");

    if($(this).hasClass("list1") === true) {
        $(".contents").text("Hanhwa Chamical");
    }
    if($(this).hasClass("list2") === true) {
        $(".contents").text("Phomain");
    }
    if($(this).hasClass("list3") === true) {
        $(".contents").text("Concierge");
    }
    if($(this).hasClass("list4") === true) {
        $(".contents").text("DaeBang");
    }
    if($(this).hasClass("list5") === true) {
        $(".contents").text("Y Studio");
    }
    if($(this).hasClass("list6") === true) {
        $(".contents").text("Musign");
    }
    if($(this).hasClass("list7") === true) {
        $(".contents").text("Crew a la mode");
    }
    if($(this).hasClass("list8") === true) {
        $(".contents").text("Bmagazine");
    }
});

