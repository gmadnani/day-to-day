
$("#currentDay").html(moment().format('dddd, MMMM Do'))

function BlockColor(){
    
    var currentHour = moment().hours() - 8;
    console.log(currentHour)

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id"));
        console.log(blockHour)

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
}

$(".saveBtn").on("click", function(){
    
    var time = $(this).parent().attr("id");
    var textevent = $(this).siblings(".description").val();

    localStorage.setItem(time, textevent)
})

$("#9 .description").val(localStorage.getItem("9"));

BlockColor();