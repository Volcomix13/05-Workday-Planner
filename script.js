
//Ensures code isn't run until browser has finished rendered, missing rest of code aka function
$(document).ready(
   
function () {
 
  

  //saves to local storage using event listener

  $(".saveBtn").on("click", function (){
      //event.preventDefault();
      var timeBlock = $(this).siblings(".description").val();
      console.log(timeBlock);
      var hour = $(this).parent().attr("id");
      localStorage.setItem(hour, timeBlock);
    });
  
  


//adds styling corresponding to each hour


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
  

 //gets user input from localStorage
for(var i=8; i<16; i++){
var k = i.toString()
  var text =localStorage.getItem("hour-"+k);
$('#hour-' +k +' .description').val(text)
}


//Adds current date to page
var today = dayjs();
$("#currentDay").text(today.format("[Today is] dddd, MMMM D, YYYY"));
console.log(today);

})
