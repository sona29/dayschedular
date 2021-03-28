var scheduleFormEl = $('#form-1');
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
    var scheduleData = scheduleDataInputEl1.val().trim();
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
for(i=0; i<9; i++){
    console.log(parseInt(scheduleDataInputEl+i));
}

if(parseInt(scheduleDataInputEl1) == currentHour ){
    $('#9').css('background', 'red'); 
}

if(parseInt(scheduleDataInputEl1) > currentHour ){
    $('#9').css('background', 'green');
}

scheduleFormEl.on('submit', handleProjectFormSubmit);