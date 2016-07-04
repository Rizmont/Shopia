//mobile
$('.menu-icon').click(function(){
	$('.mobile-menu').addClass('active');
})

$('.menu-exit').click(function(){
	$('.mobile-menu').removeClass('active');
})

//carouel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items: 1
})


//button

	$(document).ready(function() {
		$('body').append('<div id="toTop">^ Наверх</div>');
		$(window).scroll(function() {
			if($(this).scrollTop() > 200) {
				$('#toTop').fadeIn();	
			} else {
				$('#toTop').fadeOut();
			}
		});
	 
		$('#toTop').click(function() {
			$('body, html').animate({scrollTop: 0}, 400);
		});	
	});