jQuery(document).ready(function($) {

  $(".owl-carousel-home-slider").owlCarousel({

    
  loop: true,
 nav: false,

stagePadding:10,
infinite: true,
margin: 23,
dots:false,
arrow: true,
// navText: ["<img class='arrow' src='../assets/images/Icon feather-arrow-left-circle.svg'>","<img class='arrow' src='../assets/images/Icon feather-arrow-left-circle.svg'>"],



 autoHeight: false,


    responsive: {
      0: {
        items: 1,
      },
      450: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 2,
      }, 
      1920: {
        items: 2,
      },  
     

     
    },
  });
	
 

 

})(window.jQuery);
  
  
  
  
  
  
  
  
  
  