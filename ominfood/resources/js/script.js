
$(document).ready(function() {
    /* sticky nav */
    $('.js--section-features').waypoint(function(direction) {
        if (direction == "down") {
           $('nav').addClass('sticky');
        } else {
           $('nav').removeClass('sticky');
       }
    }, {
            offset:'60px'
        });
});    
    
    /* Scroll on buttons*/
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll*/
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll*/
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile navigation*/ 
		 $('.js--nav-icon').click(function() { 
		 var nav = $('.js--main-nav');
		 var icon = $('.js--nav-icon i');
		 
		 nav.slideToggle(200);

		 if (icon.hasClass('ion-navicon-round')) {
		 icon.addClass('ion-close-round');
		 icon.removeClass('ion-navicon-round');
		 
		 } else {
		 icon.addclass('ion-navicon-round');
		 icon.removeClass('ion-close-round');
 
 }


 });
      var #map;

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
    
 });

    new GMaps({
  div: '#map',
  lat: -12.043333,
  lng: -77.028333
});
 
 
