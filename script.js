
//adding the current day and date to the html
$("#currentDay").html(moment().format('dddd, MMMM Do'))

//fetching the current hour
var currentHour = moment().hours() -3;

//function for adding the color blocks to the html
$(".time-block").each(function(){
    //getting the block ids
    var blockHour = parseInt($(this).attr("id"));

    //checking the exact hour and comparing it to the block id hour for determining if its past, present or future
    if (currentHour > blockHour){
        $(this).addClass("past")
    }
    else if ( currentHour == blockHour){
        $(this).addClass("present")
    }
    else {
        $(this).addClass("future")
    } 
})

//function for the save button for the local storage of the description text
$(".saveBtn").on("click", function(){
    
    //getting the block id of the save button and the description text written in that block id
    var time = $(this).parent().attr("id");
    var textevent = $(this).siblings(".description").val();

    //saving in local storage for that particular block id
    localStorage.setItem(time, textevent)
})


//function for fetching data from the local storage
$(".hour").each(function(){
    //getting the block id
    time= $(this).parent().attr("id");
    //adding the decription text for each block id
    $(this).siblings(".description").val(localStorage.getItem(time));
})
