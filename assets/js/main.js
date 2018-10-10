$(window).on('load', function() {
    $("#loader").fadeOut(2000);
});

ScrollReveal().reveal('.sr', {
    reset : true,
    duration: 1000
});

window.onbeforeunload = function () {
    window.scrollTo(0,0);
}

$(".side-nav a").click(function(event){
    event.preventDefault();
    var aid = $(this).attr("href");
    if(screen.width > 996){
        $('html,body').animate({
            scrollTop: $(aid).offset().top
        }, 1000,'swing');
    } else {
        $('html,body').animate({
            scrollTop: $(aid).offset().top
        }, 1000,'swing');
        toggleNavMenu();
    }  
});

$(".menu-container").click(function(){
    toggleNavMenu();
});


function toggleNavMenu(){
    $(".side-nav").toggleClass("display");
    $(".top-bar").toggleClass("rotate-45");
    $(".bottom-bar").toggleClass("rotate-other45");
}