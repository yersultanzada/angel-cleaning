$(document).ready(function () {
    /**
     *  Маска для телефона
     */

    jQuery(function($){
        $("#tel").mask("+7(999)999-99-99");
        $("#tel2").mask("+7(999)999-99-99");
    });


    $(function () {
        $('[data-toggle="popover"]').popover()
    });

    /**
     *  Активация попапов
     */
    $("#main ._order").click(function () {

        var overlay = $('.popup_fog');

        overlay.fadeIn();
        overlay.css({
            'display': 'block'
        });
        $("#main .popup").addClass('active');
        $('body').css({
            'overflow': 'hidden'
        });



        function rem1() {
            overlay.css({
                'display': 'none'
            });
            $("#main .popup").removeClass('active');
            $('body').css({
                'overflow': 'auto'
            });

        }
        setTimeout(rem1, 4000);
    });

    $(".calc ._order").click(function () {
        $(".calc .popup").addClass('active');

        function rem2() {
            $(".calc .popup").removeClass('active');
        }
        setTimeout(rem2, 4000);
    });

    $("#order ._order").click(function () {
        $("#order .popup").addClass('active');

        function rem3() {
            $("#order .popup").removeClass('active');
        }
        setTimeout(rem3, 4000);
    });

    $(".calc ._order2").click(function () {
        $(".calc .popup").addClass('active');

        function rem4() {
            $(".calc .popup").removeClass('active');
        }
        setTimeout(rem4, 4000);
    });

    $('a[data-activates = mobile-dropdown]').click(function () {
       $('#mobile-dropdown').slideToggle('fast');
       if($('#mobile-dropdown').hasClass('visible')){
           $('#mobile-dropdown').removeClass('visible')
       }else{
           $('#mobile-dropdown').addClass('visible')
       }
    });

    $(window).load(function () {
       var e = $(window).width();
       if(e >= 992) {
           $('._cart').addClass('desktop_cart')
       }
    });

    window.onscroll = function() {
        if ( window.pageYOffset >= 218){
            $('.desktop_cart').addClass('desktop_fixed_cart');
        }else{
            $('.desktop_cart').removeClass('desktop_fixed_cart');
        }
    }

});