
$(document).ready(function(){
    $('.navbar-open-btn').click(function(){
        $('.navigation-sidebar').addClass('show-navigation-sidebar');
        $('.navigation-overlay').css('display', 'block');
    })

    $('.navbar-close-btn').click(function(){
        $('.navigation-sidebar').removeClass('show-navigation-sidebar');
        $('.navigation-overlay').css('display', 'none');
    })

    $(window).click(function(e){
        if($(e.target).hasClass('navigation-overlay')){
            $('.navigation-sidebar').removeClass('show-navigation-sidebar');
            $('.navigation-overlay').css('display', 'none');
        }
    })
})