$(document).ready(function(){
    $(".menu").on("click", function(){
        $("ul").toggleClass("open", 'slow', 'easeOutSine');
    });
});
