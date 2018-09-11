$(document).ready(function(){
    $(".logo").on("click", function(){
        $("ul").toggleClass("open", 'slow', 'easeOutSine');
    });
});
