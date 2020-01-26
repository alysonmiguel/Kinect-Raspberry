$(document).ready(function() {
  $("img").addClass("animated fadeInDown");
});

function dados() {
  $(document).ready(function() {
    $("#dados").addClass("animated bounceInDown");
  });
}

jQuery(document).ready(function($) {
  $(".scroll").click(function(event) {
    event.preventDefault();
    $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 700);
  });
});

$(".progress-bar").each(function() {
  var $bar = $(this);
  var progress = setInterval(function() {
    var currWidth = parseInt($bar.attr("aria-valuenow"));
    var maxWidth = parseInt($bar.attr("aria-valuemax"));

    //update the progress
    $bar.width(currWidth + "%");
    $bar.attr("aria-valuenow", currWidth + 1);

    //clear timer when max is reach
    if (currWidth >= maxWidth) {
      clearInterval(progress);
    }
  }, 100);
});

$(document).ready(function() {
  $(".box").hide();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0) {
      $(".box").fadeIn();
    } else {
      $(".box").fadeOut();
    }
  });
});

/*
var $target = $(".anime");
var animar = ".anime-start";
function animeScroll() {
  var documentTop = $(document).scrollTop();

  $target.each(function() {
    var itemTop = $(this).offset().top;
    if (documentTop > itemTop - 300) {
      $(this).addClass(animar);
    } else {
      $(this).removeClass(animar);
    }
  });
}

animeScroll();
*/
