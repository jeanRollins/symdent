$('.flexslider').flexslider({
    animation: "slide"
  });
  
  $().fancybox({
    selector : '.slides li:not(.clone) a',
    hash   : false,
    thumbs : {
      autoStart : true
    }
  });