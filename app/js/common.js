var hellopreloader = document.getElementById("hellopreloader_preload");

function fadeOutnojquery(el) {
    el.style.opacity = 1;

    var interhellopreloader = setInterval(function () {
            el.style.opacity = el.style.opacity - 0.05;
            if (el.style.opacity <= 0.05) {
                clearInterval(interhellopreloader);
                hellopreloader.style.display = "none";
            }
        }

        , 16);
}

window.onload = function () {
    setTimeout(function () {
            fadeOutnojquery(hellopreloader);
        }

        , 1000);
};

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
