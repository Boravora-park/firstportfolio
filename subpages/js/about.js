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
    $(".info .inner .korClick").on('click', function(){
        $(".kor").addClass("on");
        $(".eng").removeClass("on");
    });
    $(".info .inner .engClick").on('click', function(){
        $(".eng").addClass("on");
        $(".kor").removeClass("on");
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1000) {
        $(".skill .inner .right .computer span").css("color" , "#222");
        $(".skill .inner .right .computer span").css("transition" , "all 0.3s");
        
        }
        else {
        $(".skill .inner .right .computer span").css("color" , "#transparent");   
        $(".skill .inner .right .computer span").css("transition" , "all 0.3s");
        }
    });
    });

    $(".books li").hover(function(){
        $(this).addClass("on").siblings().removeClass("on");

            if($(this).hasClass("list1") === true) {
                $(".title .num").text("01/");
                $(".title .subTit").text("Childhood");
            }
            if($(this).hasClass("list2") === true) {
                $(".title .num").text("02/");
                $(".title .subTit").text("Otherways");
            }
            if($(this).hasClass("list3") === true) {
                $(".title .num").text("03/");
                $(".title .subTit").text("Abroad");
            }
            if($(this).hasClass("list4") === true) {
                $(".title .num").text("04/");
                $(".title .subTit").text("Traveler");
            }
            if($(this).hasClass("list5") === true) {
                $(".title .num").text("05/");
                $(".title .subTit").text("Risk Taker");
            }
        });

    $(".story .inner .mo2 li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
            if($(this).hasClass("1st") === true) {
                $(".story .inner .books .list1").addClass("on").siblings().removeClass("on");
                $(".title .num").text("01/");
                $(".title .subTit").text("Childhood");
            }
            if($(this).hasClass("2nd") === true) {
                $(".story .inner .books .list2").addClass("on").siblings().removeClass("on");
                $(".title .num").text("02/");
                $(".title .subTit").text("Otherways");
            }
            if($(this).hasClass("3rd") === true) {
                $(".story .inner .books .list3").addClass("on").siblings().removeClass("on");
                $(".title .num").text("03/");
                $(".title .subTit").text("Abroad");
            }
            if($(this).hasClass("4th") === true) {
                $(".story .inner .books .list4").addClass("on").siblings().removeClass("on");
                $(".title .num").text("04/");
                $(".title .subTit").text("Traveler");
            }
            if($(this).hasClass("5th") === true) {
                $(".story .inner .books .list5").addClass("on").siblings().removeClass("on");
                $(".title .num").text("05/");
                $(".title .subTit").text("Risk Taker");
            }
        });

