
$("#currentDay").html(moment().format('dddd, MMMM Do'))

function BlockColor(){
    
    var currentHour = moment().hours();
    console.log(currentHour)

    $(".time-block").each(function(){
        var blockHour = parseInt($(this).attr("id"));
        console.log(blockHour)
    })
}