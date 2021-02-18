$(function(){
    //ハンバーガーメニュー
    $('.hamburger').click(function(){
        $('header, .hamburger').toggleClass('active');
        if($(this).hasClass('active')){
            $('.hamburger span').css('background-color','#fff');
            $('.menuBg').addClass('activeBg');
            $('.menuWrapper').addClass('open');
        }else{
            $('.hamburger span').css('background-color','#000');
            $('.menuBg').removeClass('activeBg');
            $('.menuWrapper').removeClass('open');
        }
    });
    $('.menuBg').click(function(){
        $('header, .hamburger').removeClass('active');
        $('.hamburger span').css('background-color','black');
        $(this).removeClass('activeBg');
        $('.menuWrapper').removeClass('open')
    });
    $('.slider').slick({
        
    });
});