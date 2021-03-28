var scheduleFormEl = $('#form-1');
var scheduleDataInputEl = $('#schedule-desc-1');
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
    // to get value of data-index

}

textBox1 = JSON.parse(localStorage.getItem("dayActivity"));
console.log(textBox1);
$('#schedule-desc-1').val(textBox1[0].dayActivity);


scheduleFormEl.on('submit', handleProjectFormSubmit);