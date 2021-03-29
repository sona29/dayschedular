// momentjs : displaying current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//current hour
currentHour = moment().format("HH"); 

// handle schedule form submission
function handleProjectFormSubmit(event) {
    event.preventDefault();     
    var targetData = $(this).data("target");     
    var inputData = $(`#${targetData}`).val();    
    var scheduleData = inputData.trim();     
    localStorage.setItem(targetData, scheduleData); 
}

//getting stored localstorage
$(".form-control").each(function() {
    var hour = $(this).attr('id');
    $(`#${hour}`).val(localStorage.getItem(hour));

});

//checking hour compared to current hour
$(".form-control").each(function() {
    var hour = $(this).attr('id')

    if(parseInt(hour) == currentHour ){
        $(this).css('background', 'red'); 
    }

    if(parseInt(hour) > currentHour ){
        $(this).css('background', 'green');
    }
    
});

//for each form submit
$('form').each(function(){
    $(this).on('submit', handleProjectFormSubmit);
});

