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
        $("#main .popup").addClass('active');

        function rem1() {
            $("#main .popup").removeClass('active');
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

});