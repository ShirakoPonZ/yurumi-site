// メニューバー追従
$(function(){
	$('nav').each(function(){
		var $window = $(window),
			$header = $(this),
			headerOffsetTop = $header.offset().top;

	$window.on('scroll',function(){
		if($window.scrollTop() > headerOffsetTop){
			$header.addClass('sticky');
		} else {
			$header.removeClass('sticky');
		}
	});

	$window.trigger('scroll');

	});
});




// $(window).resize(function(){
// 	var windowSize = $(window).width();
// 		if(windowSize <= 990){
// 			$('nav').css({display: 'none'}),
// 			$('.min-contents').css({display: 'grid'});
// 		}else{
// 			$('nav').css({display: 'flex'});
// 			$('.min-contents').css({display: 'none'});
// 		}
// });

// メニューバー追従でスタイル変更