 $(function () {
     $('nav').mobileMenu({
         menuIconClassName: ".menu-icon",
         mobileResolution: 768,
         menuType: "sticky",
         offsetToSticky: 50,
         closeIconClassName: ".close-menu-icon"
     });

     var gallery = $('.about__img-gallery a').simpleLightbox();

     $(".version").hide();
     $("h4").click(function () {
         $(this).next().slideToggle();
     });
 });
