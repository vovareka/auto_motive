$(function () {
    $('.menu_icon').click(function () {
        $('.menu').slideToggle('show');
    });
  	$(window).resize(function() {      
      $('.menu').removeAttr('style');
  	});
});
$(document).ready(function(){
    $('.menu_icon').click(function (){
        if(!$('.menu_icon').hasClass('menu_transform')){
            $(this).addClass('menu_transform');
            $(this).children('.line').hide();
        } else {
            $('.menu_icon').removeClass('menu_transform');
            $('.line').show();
        }
    });
});
