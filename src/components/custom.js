

// owl carousel 

jQuery(document).ready(function($) {
 
    $("#owl-example").owlCarousel({
        loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
    });
  })

  jQuery(document).ready(function() {
    jQuery('.navbar-toggler').click(function() {
      jQuery('#navbarCollapse').fadeToggle();
    });
    jQuery('.nav-item').click(function() {
        jQuery('#navbarCollapse').fadeOut();
    });
    jQuery('.navbar-btn').click(function() {
        jQuery('#navbarCollapse').fadeOut();
    });
  });

  $(document).ready(function(){
    var owl = $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[990,1],
        itemsTablet:[768,1],
        itemsMobile:[650,1],
        pagination:true,
        navigation:false,
        autoplay:true,
        loop: true
    });
    owl.trigger('refresh.owl.carousel');
});

