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
});

$(document).on("scroll resize", function(){

var scrollTop = $(document).scrollTop();
console.log(scrollTop);

fix();
function fix(){
if(scrollTop >= 7200){
    $("#top").addClass("on");
} else{
    $("#top").removeClass("on");
}if(scrollTop > 9900){
    $("#top").removeClass("on");
}
};
});


$(document).on("scroll resize", function(){

var scrollTop = $(document).scrollTop();

fix();
function fix(){
if(scrollTop >= 1000){
    $("#page").addClass("on");
}else{
    $("#page").removeClass("on");
}if(scrollTop < 1000){
    $("#page").removeClass("on");
}
};
});


$(function(){
    $('.footersvg').find('path'/* ,'polygon' */).each(function(i, path){
        var length = path.getTotalLength();
        /* console.log(length); */
    });
});



    gsap.registerPlugin(ScrollTrigger);

    gsap.defaults({ease:"power1", duration:6});
        const tl = gsap.timeline();
        tl.from(".img1",{yPercent:0});
        tl.from(".img2",{yPercent:100});
        tl.from(".img3",{yPercent:100});

        ScrollTrigger.create({
            animation:tl,
            trigger:".imgBox",
            start:"top 15%",
            end:"+=2500",
            pin:true,
            scrub:true,
            /* markers:true */
    });

const images = gsap.utils.toArray('.like .inner ul li');
    images.forEach((img,i)=>{
        ScrollTrigger.create({
            trigger:img,
            toggleClass:'active',
            start:'top 60%',
            end:"bottom 50%",
            /* markers:true, */
            scrub:true
    });
});

const PFimages = gsap.utils.toArray('.portfolio .inner .cording li');
        PFimages.forEach((img,i)=>{
            ScrollTrigger.create({
                trigger:img,
                toggleClass:'active',
                start:'top bottom',
                end:"bottom top",
                /* markers:true, */
                scrub:true,
            });
    });



    gsap.utils.toArray(".bg").forEach(function (bg) { // .visual과 footer를 다시 원래 배경 검정색으로 돌리기 위해 bg 클래스와 data-color 추가
    
    var color = bg.getAttribute('data-color');
    
    ScrollTrigger.create({
        trigger: bg,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        /* markers:true, */
        onEnter: () => gsap.to('.wrap', { // onEnter - 스크롤 위치가 "시작"을 지나 앞으로 이동할 때
            backgroundColor: color,
            duration: 1
        }),
        onEnterBack: () => gsap.to('.wrap', { // onEnterBack - 스크롤 위치가 "끝"을 지나 뒤로 이동할 때
            backgroundColor: color,
            duration: 1
        }), 
        onLeave: () => gsap.to('.wrap', { // onLeave   - 스크롤 위치가 "끝"을 지나 앞으로 이동할 때
            backgroundColor: "#fff", 
            duration: 1
        })
    });
});
