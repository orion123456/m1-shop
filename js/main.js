//табы
$(document).ready(function() {
    $('.tabs .tab_title').find('> li:eq(0)').addClass('active');
    $('.tabs .tab_content').find('> .tabs_item:eq(0)').addClass('active');
    $('.tabs .tab_title li').click(function () {
        var tab = $(this).closest('.tabs');
        var index = $(this).index();
        tab.find('ul.tab_title > li').removeClass('active');
        $(this).addClass('active');
        tab.find('.tab_content').find('div.tabs_item').removeClass('active');
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').addClass('active');
    } );
});

//size
$('.card .size li.bold').click(function () {
    $('.card .size li.bold').removeClass('active');
    $(this).addClass('active')
} );

//popup окно
$(document).ready(function() {
    $(".modal_overlay .modal_content").prepend('<div class="modal_close"></div>');
    $(".modal_btn").click(function(event) {
        var mBtn = $(this).attr("href");

        var scroll_top = $(window).scrollTop();
        var doc_h = $(window).height();
        var pos_modal = (doc_h/2) + scroll_top;
        event.preventDefault();
        $(mBtn).addClass('active');
        $('.modal_overlay .modal_content').css({'top' : pos_modal});
    });
    $('.modal_overlay .modal_close').click(function(){
        $('.modal_overlay').removeClass('active');
    });
});

//select_menu
$( ".select_menu" ).selectmenu();