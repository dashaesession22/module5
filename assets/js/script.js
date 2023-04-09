// Get the current date and time using Moment.js
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").text(currentDay);

// Get the current hour of the day
var currentHour = moment().hours();

// Load saved data from localStorage
for (var i = 8; i <= 17; i++) {
  var savedData = localStorage.getItem("hour" + i);
  if (savedData !== null) {
    $("#hour" + i + " .description").val(savedData);
  }
}

// Save user input to localStorage when save button is clicked
$(".saveBtn").on("click", function () {
  var hour = $(this).parent().attr("id");
  var description = $(this).siblings(".description").val();
  localStorage.setItem(hour, description);
});

// Change the color of time blocks based on past, present, or future
$(".time-block").each(function () {
  var hour = parseInt($(this).attr("id").split("hour")[1]);
  if (hour < currentHour) {
    $(this).addClass("past");
  } else if (hour === currentHour) {
    $(this).addClass("present");
  } else {
    $(this).addClass("future");
  }
});

