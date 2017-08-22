$(function() {

    $('.priceList .downArrow img').click(function() {
        $('.priceList .featuresListBox').slideToggle();
    });
    $('.features').click(function() {
        $(this).next('.listOuterContainer').slideToggle();
        // console.log(number);
        $(this).parents('.featuresList').siblings('.featuresList').find('.listOuterContainer').slideUp();
    });



    $('.pricesPack').click(function() {
        var num = $(this).index();
        console.log(num);

        $(this).siblings('.pricesPack').removeClass('is-active');
        $(this).parents('.pricesPackContainer').siblings('.pricesPackContainer').find('.pricesPack').removeClass('is-active');
        $(this).toggleClass('is-active');

        $('.category').addClass('forDisplay');
        $(this).parents('.pricesPackContainer').find('.categoryBox .category').eq(num).removeClass('forDisplay');
        $(this).parents('.pricesPackContainer').find('.categoryBox .category').eq(num).slideToggle();
        $('.forDisplay').slideUp();
        // .parents('.pricesPack').removeClass('is-active');


    });


    $('.bookForm').click(function() {

        $('.bookingForm').slideToggle();

    });

    $(window).scroll(function() {

        if ($(window).scrollTop() > 690) {
            $('.scrollHeader').slideDown('fast');
        } else {
            $('.scrollHeader').slideUp('fast');
        }

    });

});
