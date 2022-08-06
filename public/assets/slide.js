$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        //navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
        navText: [$('.am-next'),$('.am-prev')],
        center: true,
       autoplay: true,
       autoplayTimeout:1000,
      autoplayHoverPause:true,
       //dots: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
  });