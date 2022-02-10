// Document Ready
$(document).ready(function() {

  // JQuery Nice Scroll
  if (screen.width > 750) {
    $("body").niceScroll({
      cursorcolor: "#179E8B", //before==> #
      background: "#DDD",
      cursorwidth: "10",
      autohidemode: false,
      cursorborder: "none",
      cursorborderradius: "0",
      cursorminheight: 60,
      zindex: '99999999',
      horizrailenabled: false
    });
  } else {

    console.log('niceScroll is not working in this screen');
  }

  // Waves Porperty
  Waves.attach('button', ['waves-button', 'waves-float']);
  Waves.init();

  // Header Function

  var myHeader = $('header'),
    myCarousel = $('.carousel-item');

  myHeader.height($(window).height());
  myHeader.width($(window).width());
  myCarousel.height(myHeader.height());
  $(window).resize(function() {

    myHeader.height($(window).height());
    myHeader.width($(window).width());
    myCarousel.height(myHeader.height());
  });

  // Smooth Scroll To section
  $("nav ul li a").click(function() {

    $("body , html").animate({
      scrollTop: $("#" + $(this).data('value')).offset().top
    }, 600);
  });

  // Active Links
  $("nav ul li").click(function() {
    $(this).addClass('active').siblings().removeClass('active');
    $("nav ul li .active").css("color", "#179E8B");
  });

  // window Scroll
  var BGT = $('.goTop'),
    nav = $('nav');
  $(window).scroll(function() {
    var ST = $(this).scrollTop();
    // Navbar Fixed
    //ST >= 100 ? nav.addClass('fixed-top bg_nav', 2000) : nav.removeClass('fixed-top bg_nav', 2000);
    // Go Top
    ST >= 800 ? BGT.show(800) : BGT.hide(500);
  });

  // Go Top Click
  BGT.click(function() {
    $("html, body").animate({
      scrollTop: 0
    }, 600);
  });

  var typed = new Typed('.headerTyped', { // Header Typed
    strings: ["is a", "personal Website"],
    typeSpeed: 100,
    loop: true,
    startDelay: 900,
    showCursor: false
  });

  var typed = new Typed('.typeWelcome', { //Type Welcome
    strings: ["welcome to our personal Website"],
    typeSpeed: 80,
    loop: true,
    showCursor: false,
    startDelay: 1400,
  });

  // Animate And Wow Plugin
  var h1 = $('h1'),
    h2 = $('h2'),
    h3 = $('h3'),
    h4 = $('h4'),
    h5 = $('h5'),
    p = $('p'),
    small = $('small'),
    li = $('li'),
    icon = $('i'),
    allImg = $('img');
  input = $('input, textarea');
  goTop = $('.goTop i');

  h1.addClass('wow tada');
  h2.addClass('wow tada');
  h3.addClass('wow tada');
  h4.addClass('wow bounceInDown');
  h5.addClass('wow bounceIn');
  allImg.addClass('wow slow');
  p.addClass('wow fadeInUp');
  small.addClass('wow fadeInUp');
  li.addClass('wow bounceInUp');
  icon.addClass('wow rotateIn');
  input.addClass('wow zoomInUp');
  goTop.addClass('wow zoomInUp');


  new WOW().init();




});
