function classToggleRemove(className, classNameToggle, classNameRemove) {
    $(`${className}`).click(function() {
        $(`${classNameToggle}`).toggleClass('active');
        $(`${classNameRemove}`).removeClass('active');
    }); 
};
classToggleRemove('.header__burgir .btn2', '.header__navbar', '.header__search');
classToggleRemove('.header__burgir .btn', '.header__search', '.header__navbar');

$('.main').click(function() {
    $('.header__navbar').removeClass('active');
    $('.header__search').removeClass('active');
});

function classToggle(className) {
    $(`${className}`).click(function() {
        $(this).toggleClass('active');
    }); 
};
classToggle('.regulations__left .item');
classToggle('.form_black__accordion');
classToggle('.autonomous_institutions__aside .item h5');
classToggle('.autonomous_institutions__aside h6');
classToggle('.autonomous_institutions__block');
classToggle('.kbk_2__accordion');

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