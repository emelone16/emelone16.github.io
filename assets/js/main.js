var timelinePointsOpen = [false, false, false, false];
var timelinePointsStyles = ["timeline-circle-line-1", "timeline-circle-line-2", "timeline-circle-line-3", "timeline-circle-line-4"];

//Set up the circles to get bigger when hovered
$(".timeline-circle-wrapper").hover(function() {
  $(this).css("transform", "scale(1.25, 1.25)");
}, function() {
    $(this).css("transform", "scale(1.0, 1.0)");
});

for(var i = 0; i < timelinePointsOpen.length; i++) {
  addTimelineActions(i);
}

for(var i = 0; i < 4; i++) {
  addNavActions(i);
}

setTimeout(function() {
  openTimeline(0);
}, 1);

function addTimelineActions(num) {
  $(".timeline-circle").eq(num).on("click", function() {
    if(timelinePointsOpen[num] == false) {
      openTimeline(num);
    } else {
      closeTimeline(num);
    }
  });
}

function addNavActions(num) {
  $("#nav-bar .nav-button").eq(num).on("click", function() {
    openTimeline(num);

    $("#selected-button").css("left", num * 25 + "%");
  });
}

function openTimeline(num) {
  for(var i = 0; i < timelinePointsOpen.length; i++) {
    closeTimeline(i);
  }

  $("#selected-button").css("left", num * 25 + "%");

  $(".timeline-circle").eq(num).addClass(timelinePointsStyles[num]);
  $(".timeline-circle").eq(num).removeClass("text-hidden");

  $(".timeline-circle-wrapper").eq(num).css("transform", "scale(1.0, 1.0)");
  $(".timeline-circle-wrapper").eq(num).hover(function() {
    $(this).css("transform", "none");
  });

  timelinePointsOpen[num] = true
}

function closeTimeline(num) {
  $(".timeline-circle").eq(num).removeClass(timelinePointsStyles[num]);
  $(".timeline-circle").eq(num).addClass("text-hidden");

  $(".timeline-circle-wrapper").eq(num).hover(function() {
    $(this).css("transform", "scale(1.25, 1.25)");
  }, function() {
    $(this).css("transform", "scale(1.0, 1.0)");
  });

  timelinePointsOpen[num] = false;
}
