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


$(document).on("scroll resize", function(){

var scrollTop = $(document).scrollTop();
console.log(scrollTop);

fix();
function fix(){
if(scrollTop >= 7800){
    $("#top").addClass("on");
} else{
    $("#top").removeClass("on");
}if(scrollTop > 11000){
    $("#top").removeClass("on");
}
};
});
if($(window).width()<=1700) {
    $(document).on("scroll resize", function(){

    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);

    fix();
    function fix(){
    if(scrollTop >= 6000){
        $("#top").addClass("on");
    } else{
        $("#top").removeClass("on");
    }if(scrollTop > 10000){
        $("#top").removeClass("on");
    }
    };
});
}

if($(window).width()<=1400) {
    $(document).on("scroll resize", function(){

    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);

    fix();
    function fix(){
    if(scrollTop >= 5800){
        $("#top").addClass("on");
    } else{
        $("#top").removeClass("on");
    }if(scrollTop > 7800){
        $("#top").removeClass("on");
    }
    };
});
}

if($(window).width()<=1100) {
    $(document).on("scroll resize", function(){

    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);

    fix();
    function fix(){
    if(scrollTop >= 6200){
        $("#top").addClass("on");
    } else{
        $("#top").removeClass("on");
    }if(scrollTop > 9000){
        $("#top").removeClass("on");
    }
    };
});
}

if($(window).width()<=520) {
    $(document).on("scroll resize", function(){

    var scrollTop = $(document).scrollTop();
    console.log(scrollTop);

    fix();
    function fix(){
    if(scrollTop >= 6300){
        $("#top").addClass("on");
    } else{
        $("#top").removeClass("on");
    }if(scrollTop > 7500){
        $("#top").removeClass("on");
    }
    };
});
}


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
}if(scrollTop > 8000){
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


    // 마우스스크롤부드럽게
/* class Scrooth {
  constructor({element = window, strength=10, acceleration = 1.2,deceleration = 0.975}={}) {
    this.element = element;
    this.distance = strength;
    this.acceleration = acceleration;
    this.deceleration = deceleration;
    this.running = false;

    this.element.addEventListener('wheel', this.scrollHandler.bind(this), {passive: false});
    this.element.addEventListener('mousewheel', this.scrollHandler.bind(this), {passive: false});
    this.scroll = this.scroll.bind(this);
  }

  scrollHandler(e) {
    e.preventDefault();

    if (!this.running) {
      this.top = this.element.pageYOffset || this.element.scrollTop || 0;
      this.running = true;
      this.currentDistance = e.deltaY > 0 ? 0.1 : -0.1;
      this.isDistanceAsc = true;
      this.scroll();
    } else {
      this.isDistanceAsc = false;
      this.currentDistance = e.deltaY > 0 ? this.distance : -this.distance;
    }
  }

  scroll() {
    if (this.running) {
      this.currentDistance *= this.isDistanceAsc === true ? this.acceleration : this.deceleration;
      Math.abs(this.currentDistance) < 0.1 && this.isDistanceAsc === false ? this.running = false : 1;
      Math.abs(this.currentDistance) >= Math.abs(this.distance) ? this.isDistanceAsc = false : 1;

      this.top += this.currentDistance;
      this.element.scrollTo(0, this.top);
      
      requestAnimationFrame(this.scroll);
    }
  }
}

const scroll = new Scrooth({
  element: window,
  strength: 30, // 스크롤 한번 할때 내려가는 길이(=속도)조절
  acceleration: 1.5,
  deceleration: 0.975,
}); */

