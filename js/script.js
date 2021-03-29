var scheduleFormEl1 = $('#form-1');
var scheduleDataInputEl1 = $('#9');
var scheduleDataInputEl2 = $('#10');
var scheduleDataInputEl3 = $('#11');
var scheduleDataInputEl4 = $('#12');
var scheduleDataInputEl5 = $('#13');
var scheduleDataInputEl6 = $('#14');
var scheduleDataInputEl7 = $('#15');
var scheduleDataInputEl8 = $('#16');
var scheduleDataInputEl9 = $('#17');
var dayActivity = [];

// momentjs : displaying current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//current hour
currentHour = moment().format("HH"); 

// handle schedule form submission
function handleProjectFormSubmit(event) {
    event.preventDefault();  
    console.log($(this).data("target"));
    var targetData = $(this).data("target"); 
    // console.log(targetData) ;
    var inputData = $(`#${targetData}`).val();
    
    var scheduleData = inputData.trim(); 
    //add into array
    dayActivity.push({hour: targetData, dayActivity: scheduleData});
    //setting to local storage
    localStorage.setItem("dayActivity", JSON.stringify(dayActivity)); 
}

//getting stored localstorage
textBox = JSON.parse(localStorage.getItem("dayActivity")) || [];
if(textBox.length){

    for (var i = 0; i < textBox.length; i++){
        // console.log(textBox[i].dayActivity);
        $(`#${textBox[i].hour}`).val(textBox[i].dayActivity);
    }
    // console.log(textBox1);
    // $('#9').val(textBox1[0].dayActivity);
}


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


$('form').each(function(){
    $(this).on('submit', handleProjectFormSubmit);

});

// scheduleFormEl1.on('submit', handleProjectFormSubmit);