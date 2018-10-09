jQuery(document).ready(function($){
	$('.brand').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 5,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2
			}
		}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
    ]
  });
});

jQuery(document).ready(function($){
	$(".head__list").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top - 100;
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".fancybox").fancybox({
		tpl:{
			closeBtn : '<a title="Закрыть" class="fancybox-my-close" href="javascript:;"><img src="img/cross.svg" alt="Закрыть"></a>',
		},	
	});

	$(".wpcf7-tel").mask("+7 (999) 999-99-99",{placeholder:" "});

	$('select').styler();
});