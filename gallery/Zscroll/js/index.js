
$(function(){
    //01.페이지로딩시 제일 상단으로 스크롤 이동
    $("body, html").stop().animate({"scrollTop":0}, 1500,"swing");

    //02.변수 scroll에 현재 scrollTop의 위칫값을 저장하고 h1출력
    $(window).on("scroll", function(){
        var scroll = $(this).scrollTop();
        /* $("h1").text(scroll); */


    //03.스크롤값과 박스의Z축을 연동하고 특정구간에 스크롤네비게이션 박스를 활성화
     for(var i=0; i<5; i++){
        $("section>article").eq(i).css({"transform": "translateZ("+ parseInt((-5000*i)+scroll) +"px)"});
        if(scroll >= i*5000 && scroll < (i+1)*5000){
            $(".scrollNavi li").removeClass('on');
            $(".scrollNavi li").eq(i).addClass('on');
            $("article").removeClass('on');
            $("article").eq(i).addClass('on');
        };
     }; 
     
    //  parseInt()함수는 문자열을 숫자열로 반환
    //  1. 변수i의 초기값은 0이며 i가 5보다 작을 때 곧 4일때까지 다음구문 실행
    //  2. 각 article의 인덱스는 Z축으로 ( -5000*인덱스)+ scroll(현재스크롤 위칫값)으로 이동하고 다음조건식 실행
    //  3. scroll(현재스크롤 위칫값)이 (해당 인덱스 * 5000)보다 크거나 작고, (해당인덱스 + 1) *5000보다 적으면  ture를 반환하여 다음{}구분 실행
     
     
     
    //04.스크롤네비게이션 클릭시 스크롤이동
    $(".scrollNavi li").on("click", function(){
        var a = $(this).index();
        $("body,html").stop().animate({"scrollTop" :5000*a},1500,"swing");
    });



    //05.화면에서 마우스 무브시 박스안에 콘텐츠 움직이기
    $("body").on("mousemove", function(e){
        var posX = e.pageX/100; 
        //변수posX에는 현재 화면상의 마우스커서의  X축의 위치
        var posY = e.pageY/70; 
        //변수posY에는 현재 화면상의 마우스커서의  Y축의 위치를 저장하고 이때 해당수치의 
        //변화폭을 줄이기위해 각각 수치를 줌(50~150정도까지 적용해볼것)
        $(".obj11").css({"right":150-posX, "top":-150-posY});
        $(".obj21").css({"left":300-posX, "top":418-posY});
        $(".obj22").css({"left":480-posX, "top":-5-posY});
        $(".obj23").css({"right":187-posX, "bottom":105-posY});
        $(".obj24").css({"right":-71-posX, "bottom":337-posY});
        $(".obj25").css({"left":0-posX, "top":50-posY});
    });
    });
});