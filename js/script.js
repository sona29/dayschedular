var scheduleFormEl = $('#form-1');
var scheduleDataInputEl = $('#9');
var dayActivity = [];

// momentjs : displaying current date
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do YYYY"));


//current hour
currentHour = moment().format("HH"); 

// handle schedule form submission
function handleProjectFormSubmit(event) {
    event.preventDefault();  
    var scheduleData = scheduleDataInputEl.val().trim();
    // console.log(scheduleData);  
    dayActivity.push({dayActivity: scheduleData});
    localStorage.setItem("dayActivity", JSON.stringify(dayActivity)); 
}

textBox1 = JSON.parse(localStorage.getItem("dayActivity")) || [];
if(textBox1.length){
    console.log(textBox1);
    $('#9').val(textBox1[0].dayActivity);
}


//checking time compared to current time
if(parseInt(scheduleDataInputEl) == currentHour ){
    $('#9').css('background', 'red'); 
}

if(parseInt(scheduleDataInputEl) > currentHour ){
    $('#9').css('background', 'green');
}

scheduleFormEl.on('submit', handleProjectFormSubmit);