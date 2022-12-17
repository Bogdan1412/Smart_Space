// $(document).ready(function(){
// 	$('.header__burger').click(function(event){
// 	$('.header__burger,.header__menu').toggleClass('active');
// 	$('body').toggleClass('lock');
// 	});
// });
$(document).ready(function(){
$('.header__burger').click(function(event){
$('.header__burger,.header__menu').toggleClass('active');
$('body').toggleClass('lock');
});
});

// const swiper = new Swiper('.slider-main-block', {
//   // Optional parameters
//   loop: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.slider-main-block__arrow.swiper-button-next',
//     prevEl: '.slider-main-block__arrow.swiper-button-prev',
//   },
// });
const swiper = new Swiper('.slider-main-block', {
loop: true,
navigation: {
	nextEl: '.slider-main-block__arrow.swiper-button-next',
	prevEl: '.slider-main-block__arrow.swiper-button-prev',
},
});
// табы 
// const tabNavItems = document.querySelectorAll('.tabs-deals__button');
// const tabItems = document.querySelectorAll('.tabs-deals');
// document.addEventLisner('click', function (e) {
// const targetElement = e.target;
// let currentActiveIndex = null;
// let newActiveIndex = null;
// if (targetElement.closet('.tabs-deals__button')) {
// 	tabNavItems.forEach((tabNavItem, index) => {

// 	}

// 	)
// }
// });
