import jquery from 'jquery';
import ScrollReveal from 'scrollreveal'

import Flickity from 'flickity';

import 'flickity/dist/flickity.css';

window.jQuery = window.$ = jquery;

(function () {

  /**
   * Burger-menu
   */
  $('.burger-menu').click(function () {
    var menu = $('.menu');
    $(this).toggleClass('active');
    menu.toggleClass('active');
  });

  /**
   * Fix menu
   */
  $(window).on('scroll', function() {
    if($(this).scrollTop() > $('#intro').height()) {
      $('#app-header').addClass('is-fixed');
    } else {
      $('#app-header').removeClass('is-fixed');
    }
  })

  /**
   * Scroll
   */
  $(".scroll-link").on("click", function (event) {
    event.preventDefault();

    var id = $(this).attr('href');

    if (id.length > 1) {

      var top = ($(id).offset().top - $('#app-header').height());

      $('body,html').animate({
        scrollTop: top
      }, 1500);

      $('.burger-menu').removeClass('active');
      $('.menu').removeClass('active');
    }
  });


  /**
   * Form
   */

  $('.form-control').on('focus', function () {
    $(this).parents('.form-group').addClass('in-focus');
  });

  $('.form-control').on('blur', function () {
    if ($(this).val() !== "") {
      $(this).parents('.form-group').addClass('in-focus');
    } else {
      $(this).parents('.form-group').removeClass('in-focus');
    }
  });

  /**
   * Tabs
   */

  $('.program-tabs-header-list').find('li').eq(0).addClass('active');
  $('.program-tabs-body-item').eq(0).addClass('active');
  var programHeight = $('.program-tabs-body-item').height();
  $('.program-tabs-body').css('padding-top', `${programHeight}px`);

  $('.program-tabs-header-list').on('click', 'li:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('#program').find('.program-tabs-body-item').removeClass('active').eq($(this).index()).addClass('active');
    $('.program-tabs-body').css('padding-top', $('.program-tabs-body-item').eq($(this).index()).height() + 'px');
  });

    /**
     * Modal
     */
    var singupModal = $('#custom-modal');
    var downloadModal = $('#custom-modal2');
    var closeModal = $('.close-modal');
    var modalMask = $('.modal-mask');

    $('.open-singup').on('click', function (e) {
        e.preventDefault();
        $(singupModal).addClass('active');
        $(closeModal).addClass('active');
        $(modalMask).addClass('active');
    });

    $('.download-list').on('click', function (e) {
      e.preventDefault();
      $(downloadModal).addClass('active');
      $(closeModal).addClass('active');
      $(modalMask).addClass('active');
  });

    $(closeModal).on('click', function () {
        $(singupModal).removeClass('active');
        $(downloadModal).removeClass('active');
        $(closeModal).removeClass('active');
        $(modalMask).removeClass('active');
    });

    $(modalMask).on('click', function () {
        $(singupModal).removeClass('active');
        $(downloadModal).removeClass('active');
        $(closeModal).removeClass('active');
        $(modalMask).removeClass('active');
    });
  /**
   * Footer secondary
   */
  $('.app-footer-secondary').css('margin-top', '-' + $('.app-footer-secondary').innerHeight() + 'px');

  /**
     * Animate scroll
     */
    ScrollReveal().reveal('.intro-item', {
      origin: 'left',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.intro-description', {
      origin: 'left',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.for-who-img', {
      origin: 'left',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.for-who-item', {
      origin: 'right',
      delay: 400,
      distance: '200px',
  });
  ScrollReveal().reveal('.speaker-card', {
      origin: 'bottom',
      delay: 500,
      distance: '400px',
  });
  ScrollReveal().reveal('.contacts-item', {
      origin: 'right',
      delay: 500,
      distance: '200px',
  });

  /**
   * Map
   */
var element = document.getElementById('map');

var map = L.map(element);

var logoIcon = L.icon({
  iconUrl: 'wp-content/themes/akrigel/images/icon/logo/marker-icon.png',

  iconSize: [45, 45], 
  iconAnchor:   [22, 94], 
  popupAnchor:  [-3, -76] 
});

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var target = L.latLng('47.8376506', '35.1425166');

map.setView(target, 14);
map.scrollWheelZoom.disable();

L.marker(target, {icon: logoIcon}).addTo(map);

})(jQuery)






if (document.querySelector('.slider_feedback')) {



  if ($(window).width() < 992) {

      
  var flktyF = new Flickity('.slider_feedback', {
      wrapAround: true,
      prevNextButtons: false,
      cellAlign: 'center',
      draggable: true,
      pageDots: true,
      contain: true,
      autoPlay: 3500,
      initialIndex: 0
  });

  var prevArrowReviews = document.querySelector('.slider_feedback_wrap .slider_btn__prev');

      prevArrowReviews.addEventListener('click', function () {
      flktyF.previous(true, false);
  });

  var nextArrowReviews = document.querySelector('.slider_feedback_wrap .slider_btn__next');

      nextArrowReviews.addEventListener('click', function () {
      flktyF.next(true, false);
  });

  } else {


  
  var flktyF = new Flickity('.slider_feedback', {
      wrapAround: true,
      prevNextButtons: false,
      cellAlign: 'center',
      draggable: false,
      pageDots: true,
      contain: true,
      adaptiveHeight: true,
      initialIndex: 0
  });

  var prevArrowReviews = document.querySelector('.slider_feedback_wrap .slider_btn__prev');

      prevArrowReviews.addEventListener('click', function () {
      flktyF.previous(true, false);
  });

  var nextArrowReviews = document.querySelector('.slider_feedback_wrap .slider_btn__next');

      nextArrowReviews.addEventListener('click', function () {
      flktyF.next(true, false);
  });


  }


}
