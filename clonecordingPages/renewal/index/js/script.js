//1. fullpage
$(function() {
	$('#fullpage').fullpage({
        fingersonly: true, 
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		menu: '.leftNav',
        afterLoad: function(anchorLink, index){
			if(index == 2){ //두번째 페이지에 카운트업
				$('.count').counterUp({delay: 10,time: 550});
			}
            if(index == 3){ //세번째 페이지에 카운트업
				$('.count2').counterUp({delay: 10,time: 550});
            }
		}
	});
});
