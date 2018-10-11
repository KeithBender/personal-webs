ScrollReveal().reveal('.sr');

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$("#menu").click(function () {
    toggleMenuBar();
});

$(".sliding-link-more").click(function (event) {
    event.preventDefault();
    var aid = $(this).attr("href");
    $('html,body').animate({
        scrollTop: $(aid).offset().top
    }, 'slow');
    toggleMenuBar();
});

$("a[href='#top']").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow");
    toggleMenuBar();
    return false;
});

function toggleMenuBar() {
    $("i.fas").fadeToggle(function () {
        $("i.fas").toggleClass("fa-bars fa-times");
    });
    $("ul").fadeToggle();
    $("i.fas").fadeToggle();
}