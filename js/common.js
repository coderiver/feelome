$(document).ready(function() {

$(window).scroll(function(){
	var scroll_top = $(document).scrollTop();
	if (scroll_top > 0) {
		$('.header').addClass('is-fixed');
	}
	else{
		$('.header').removeClass('is-fixed');
	}
});

});