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
     $(".version-button").click(function () {
         $(this).next().slideToggle();
     });
 });
