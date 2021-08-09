"use strict";

$(function () {

    $('.resume__row img').okzoom({
        height: 300,
        width: 800,
        border: "1px solid black",
        shadow: "0 0 5px black",
    });

    $('.works__row > div').click(function (e) {
        if ($(this).children('div').hasClass('selected')) {
            $('.selected').slideUp(1000).removeClass('selected');
            return;
        }
        $('.selected').slideUp(1000).removeClass('selected');


        $(e.target).closest('div').children('div').slideToggle(1000).addClass('selected');
    });

    $('.column').mouseover(function (e) {
        $(this).find('img').addClass('scale');

        $('.column').mouseout(function () {
            $('.scale').removeClass('scale');
        });
    });

    $('.nav ul').click(function (e) {
        e.preventDefault();

        let id = $(e.target).attr('href');

        let top = $(id).offset().top;

        $('body, html').animate({ scrollTop: top }, 1000);
    });

    $('.rudolf').click(function () {
        $('.food').fadeToggle(1000);
    });

    $('.food').click(function (e) {
        console.log($(e.target).prop('alt'));
    });
});