
//Ensures code isn't run until browser has finished rendered, missing rest of code aka function
//$(document).ready({
   
$(function () {
 
  //To compare current time vs time block
  

  //saves to local storage using event listener
  var saveBtn = $(".saveBtn");

  saveBtn.on("click", function (event){
    event.preventDefault();
    var timeBlock = $(this).siblings(".time-block").val();
    var hour = $(this).parent().attr("id");
    localStorage.setItem(timeBlock, hour);
  });
  


  // TODO: Add code to apply the past, present, or future class to each time block by comparing the id to the current hour. HINTS: How can the id attribute of each time-block be used to conditionally add or remove the past, present, and future classes? How can Day.js be used to get the urrent hour in 24-hour time?

 // var $(this) = $(this).siblings(".time-block");
 // console.log(this);

function updateTime(){
  var currentHour = dayjs().hour();



  $(".time-block").each(function () {
    var rowTimeBlock = parseInt($(this).attr("id").split("-")[1])
    if(rowTimeBlock < currentHour){
      $(this).addClass("past");
      }else if (rowTimeBlock === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
      }else{
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future"); 
      }
  })
}
updateTime();
  

  //create a function with a variable with the current time
  //that will give me current time

  



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

//Adds current date to page
var today = dayjs();
$("#currentDay").text(today.format("[Today is] dddd, MMMM D, YYYY"));
console.log(today);

})

//});
