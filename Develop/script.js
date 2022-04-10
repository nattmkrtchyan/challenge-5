$(document).ready(function(){
 
 $( ".saveBtn" ).on("click",function() {

  var value = $(this).siblings('.description').val();
        //get the time value of this parent element by id
  var time = $(this).parent().attr('id');
       // save in in local storage
 localStorage.setItem(time, value);
       //show notification that item was saved to localstorage by adding class show
 $(".notification").addClass(".show")
       // timeout to remove show class after 5 seconds
 setTimeout(function(){
  $(".notification").removeClass("show");
       }, 5000);
  });

  function hourUpdater() {
    // get current number of hours
 var currentHour = moment().hours();
    // loop over time blocks
  $(".time-block").each(function() {
 var blockHour = parseInt(
        $(this)
          .attr("id")
          .split("-")[1]
          // [pm, 5]
      );
      // check if we’ve moved past this time
      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    });    
}
hourUpdater();
// set up interval to check if current time needs to be updated
var interval = setInterval(hourUpdater, 1500);

    $("#time-9 .description").val(localStorage.getItem("time-9"));
    $("#time-10 .description").val(localStorage.getItem("time-10"));
    $("#time-11 .description").val(localStorage.getItem("time-11"));
    $("#time-12 .description").val(localStorage.getItem("time-12"));
    $("#time-1 .description").val(localStorage.getItem("time-1"));
    $("#time-2 .description").val(localStorage.getItem("time-2"));
    $("#time-3 .description").val(localStorage.getItem("time-3"));
    $("#time-4 .description").val(localStorage.getItem("time-4"));
    $("#time-5 .description").val(localStorage.getItem("time-5"));
//display the current date on the page




$("#currentDay").text(moment().format('dddd, MMMM Do'));

});