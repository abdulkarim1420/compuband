$("#click-1").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#sliders").offset().top
    }, 700);
});

$("#click-2").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#services").offset().top
    }, 700);
});

$("#click-3").click(function () {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#contact-us").offset().top
    }, 700);
});

AOS.init({
    duration: 800,
  })

  $(".nav a").on("click", function(){
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
 });