$(function() {
    $(window).scroll(function() {
        for(var i = 1; i <= 4; i++) {
            if($("section:nth-child(" + i + ")").offset().top < $(window).scrollTop() + 100) {
                $("nav li").removeClass("current");

                $("nav li:nth-child(" + i + ")").addClass("current");
            }

            if($("section:last-child").offset().top < $(window).scrollTop() + $(window).height() * 0.7) {
                $("nav li").removeClass("current");
                $("nav li:last-child").addClass("current");
            }
        }
    });
});
