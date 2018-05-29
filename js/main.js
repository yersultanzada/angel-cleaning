$(document).ready(function () {

    $("#main-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        video:true,
        center: true,
        nav: true,
        navText: [
            "<i class='mdi mdi-chevron-left'></i>",
            "<i class='mdi mdi-chevron-right'></i>"
        ]
    });

    $(".dropdown-button").dropdown({
        hover: true,
        coverTrigger: false
    });

    $('.sidenav').sidenav();

    var dropdownMenu = $(".dropdown-content li a");
    dropdownMenu.click(function () {
            dropdownMenu.removeClass('active');
            $(this).addClass('active')
    });

});