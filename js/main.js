$(document).ready(function () {
    /**
     *  Маска для телефона
     */

    jQuery(function($){
        $("#tel").mask("+7(999)999-99-99");
        $("#tel2").mask("+7(999)999-99-99");
    });

    $('._dot img').hover(function () {
        $('._dot img').css({
            'cursor': 'pointer'
        });
        $('._dot .shown').css({
            'display': 'none'
        });
        $('._dot .hidden').css({
            'display': 'inline-block'
        });
    });

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

});