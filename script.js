
$("#currentDay").html(moment().format('dddd, MMMM Do'))


var currentHour = moment().hours();

$(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id"));

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


$(".saveBtn").on("click", function(){
    
    var time = $(this).parent().attr("id");
    var textevent = $(this).siblings(".description").val();

    localStorage.setItem(time, textevent)
})


$(".hour").each(function(){
    time= $(this).parent().attr("id");
    $(this).siblings(".description").val(localStorage.getItem(time));
})
