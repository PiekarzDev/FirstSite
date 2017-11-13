$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >=500 && $(window).width() >=880){
            $('.page-header').addClass('shrink');
        }
        else{
            $('.page-header').removeClass('shrink');
        }
    });
});