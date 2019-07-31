$(document).ready(function() {
    var banner_height = $(".navbar").height();
    var lastScrollTop = 0;
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var currScrollTop = $(this).scrollTop();
      if (scroll >= banner_height && currScrollTop > lastScrollTop) {
        $(".navbar").hide();
      } else {
        $(".navbar").show();
      }
      lastScrollTop = currScrollTop;
  
    });
  
  });
  
 $(".email").click(function(){
  window.open('mailto:anibalcampos2324@gmail.com');
 });