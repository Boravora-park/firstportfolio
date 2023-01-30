 //1.스크립트 위로 튕기는것
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});

//2.슬라이드
$(function(){
    $('.lux .inner ul').slick({
        dots: true,
        infinite: false,
        speed: 3000,
        slidesToShow: 4,
        slidesToScroll: 4,
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
      });
}); 



//.3.scroll 애니메이션
$(function() {
	$('.animate').scrolla({
		mobile: true, //모바일버전시 활성화
		once: false //스크롤시 딱 한번만 하고싶을땐 true
	});    
        }); 

//배경색 변경
$(window).on ('scroll resize', function(){
    var scrollTop = 0;
    scrollTop = $(document).scrollTop();
    bgColor();

    function bgColor() {
        if(scrollTop > 1400){
            $('body').addClass('on');
        } else {
            $('body').removeClass('on');
        }if(scrollTop > 2700){
            $('body').removeClass('on');
        }
    }
});

//햄버거 메뉴
$(function(){
    $(".menuOpen button.open").on("click", function(){
        $(".menuOpen .menuWrap").addClass('on');
    });
    $(".menuOpen .menuWrap .close").on("click", function(){
        $(".menuOpen .menuWrap").removeClass('on');
    });
});

//mainmenu span.bar
$(function(){
    $(".gnb li a").on("mouseenter focus",function(){
        var bar = $(this).position().left;
        var width = $(this).width();
        $('span.bar').css({
            'left':bar +'px','width':width+'px', 'opacity':1});
    });
    $(".gnb li a").on("mouseleave", function(){
        $('span.bar').css({
            'left':0,'width':0, 'opacity':0});
    });
});

/* $(function() {
    $('.svgAni').find('path').each(function( i, path ) {  
    var length = path.getTotalLength();
        alert(length);
    });
});//1564.736083984375 */