

// USING OWL CAROUSEL .JQUERY

$(document).ready(function(){

//  owl slider here
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    items: 1,
    navText: ['<', '>'],
    smartSpeed: 1000,
    autoplay: true,
    duration: 3000,
    responsive: {
      0: {

        nav: false,  // for the  button to be hidden on the mobile view
        dots: true
        },
      768: {
        nav: true,
        dots: false
      }
    }
  }); 


  
  $('#project-slider').owlCarousel({
    loop: true,
    margin: 24,  // for item margin per view
    nav: false,
    dots: false,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
        nav: true,
        margin: 0,
        autoplay: true
      },

      768: {
     items: 2,
     nav: true,
      },
      1140: {
        nav: true,
        fade: true,
        items: 2, 
        center: true,
        autoplay: true,
      },
    }
  });


$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10, 
  nav: false,
  dots: true,
  items: 1,
  smartSpeed: 800,
  })







// Counter Aanimation
let nCount = function(selector){
  $(selector).each(function(){
    $(this).animate({
      Counter: $(this).text() 
    }, {
      duration: 4000,
      easing:'swing',
      step: function(value){
      $(this).text(Math.cell(value));
      }
     }
     );
  });
};

let a = 0;
$(window).scroll(function(){
let oTop = $('#C-numbers').offset().top - window.innerHeight;
 if(a == 0&& $(window).scrollTop()>= oTop) {
   a++;
   console.log("counter animation");
   nCount("#n-count > ");
 };

});

 //Scroll Reveal
 const Sr = new ScrollReveal({
  reset: false,
  distance: '60px',
  delay: 100
});

// reveal target elements

Sr.reveal('.headline-lg, .headline-md, .service-box',{delay: 500, origin: 'bottom', interval: 300});
Sr.reveal('.abu-p, .gainIntro, .info-card, .inv-span, .author2 ',{delay: 600, origin: 'left', interval: 500});
Sr.reveal('.inv-h1, #inv-image, .author',{delay: 700, origin: 'top'});
Sr.reveal('.social-links > a, .app-store-img',{delay: 600, origin: 'left', interval: 200});
});