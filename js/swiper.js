$(function(){
	var swiper = new Swiper('.swiper-container', {
			  loop: true,
			  centeredSlides: true,
			  autoplay: {
			    delay: 2500,
			    disableOnInteraction: false,
			  },
			  pagination: {
			    el: '.swiper-pagination',
			    clickable: true,
			  }
	});
})