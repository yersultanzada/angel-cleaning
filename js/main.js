$(document).ready(function () {

    $('.collapsible').collapsible();

    /**
     *  Маска для телефона
     */

    jQuery(function($){
        $("#tel").mask("+7(999)999-99-99");
    });

});