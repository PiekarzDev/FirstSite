$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() >=500){
            $('.page-header').addClass('shrink');
        }
        else{
            $('.page-header').removeClass('shrink');
        }
    });
});