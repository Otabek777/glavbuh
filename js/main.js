$('.header__burgir .btn2').click(function() {
    $('.header__navbar').toggleClass('active');
    $('.header__search').removeClass('active');
});
$('.header__burgir .btn').click(function() {
    $('.header__search').toggleClass('active');
    $('.header__navbar').removeClass('active');
});
$('.main').click(function() {
    $('.header__navbar').removeClass('active');
    $('.header__search').removeClass('active');
});

$('.regulations__left .item').click(function() {
    $(this).toggleClass('active')
});
$('.form_black__accordion').click(function() {
    $(this).toggleClass('active');
});
$('.autonomous_institutions__aside .item h5').click(function() {
    $(this).toggleClass('active');
});
$('.autonomous_institutions__aside h6').click(function() {
    $(this).toggleClass('active');
});
$('.autonomous_institutions__block').click(function() {
    $(this).toggleClass('active');
});
$('.kbk_2__accordion').click(function() {
    $(this).toggleClass('active');
});
$('.header__connect').click(function() {
    $('.not_enough_rights').addClass('active');
});
$('.modal__close').click(function() {
    $('.modal').removeClass('active');
});
$('.title_h2__open_filter').click(function() {
    if($('.autonomous_institutions__aside')) {
        $('.bg').addClass('active');
        $('.autonomous_institutions__aside').addClass('active');
    }
    if($('.kbk_2__aside')) {
        $('.bg').addClass('active');
        $('.kbk_2__aside').addClass('active');
    }
});
$('.filter_close').click(function() {
    $('.bg').removeClass('active');
    if($('.autonomous_institutions__aside')) {
        $('.autonomous_institutions__aside').removeClass('active');
    }
    if($('.kbk_2__aside')) {
        $('.kbk_2__aside').removeClass('active');
    }
});