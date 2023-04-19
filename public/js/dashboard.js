"use strict";

const $ = (selector) => document.querySelector(selector);

let tempTimer ;
let tempTimerTime = 0;


const postalRegEx =
  /^[ABCEGHJ-NPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][ -]?\d[ABCEGHJ-NPRSTV-Z]\d$/i;

const onReset = (evt) => {
  //TODO:: Reset the reset-able fields
  resetErrors();

  $("#notifications").checked = true;

  $("#eco").checked = true;
  $("#temperature").value = 21;
  $("#location").value = "L7W 4T8";

  evt.preventDefault();
};

const resetErrors = () => {
  $("#temperature_error").textContent = "";
  $("#location_error").textContent = "";
  console.error("Fields Reset");
};

const onSubmit = (evt) => {
  //TODO::Reset any errors before submitting
  resetErrors();

  //TODO:: Set notifications since it doesn't need to be validated
  let notificationsOn = $("#notifications").checked;

  $("#setting_notifications").textContent = notificationsOn ? "On" : "Off";

  //TODO:: Set lighting mode with a for loop since it doesn't need to be validated
  //querySelectorAll returns an array of everything that matches the argument
  let lightingModeOptions = document.querySelectorAll("[name='lighting_mode']");

  for (let i = 0; i < lightingModeOptions.length; i++) {
    if (lightingModeOptions[i].checked) {
      //Set setting_lighting_mode to the value of the selected radio button
      $("#setting_lighting_mode").textContent = lightingModeOptions[i].value;
    }
  }

  //TODO:: Validate the postal code with the Regular Expression,
  //TODO:: Display an error if not valid
  let location = $("#location").value;

  if (postalRegEx.test(location)) {
    //if the postal code is valid this code will run
    $("#setting_location").textContent = location;
  } else {
    //Add your logic here if the postal code is not valid
    $("#location_error").textContent =
      "The postal code did not match the format required.";
  }

  //TODO:: Validate the temperature by checking the range and if it's a number
  //TODO:: Display an error if not valid
  let temperature = $("#temperature").value;
  let temperatureError = $("#temperature_error");

  if (isNaN(temperature) || temperature == "") {
    temperatureError.textContent = "This is not a valid temperature selection.";
  } else if (temperature > 25) {
    temperatureError.textContent =
      "Max temperature is 25C, setting temperature to Max";
    $("#setting_temperature").textContent = 25;
  } else if (temperature < 10) {
    temperatureError.textContent =
      "Min temperature is 10C, setting temperature to Min";
    $("#setting_temperature").textContent = 10;
  } else {
    $("#setting_temperature").textContent = temperature;
  }

  evt.preventDefault();
};



//Temp Timer//
function TempTempFunction() {
//recieves data input for time
  const timeinput = document.getElementById("time");

  const timeRegex = /^([0-9]{1,2}):([0-9]{2})$/;

  const inputtime = timeinput.value;

  let origtemp=temperature;
  let temp = $("#temp").value;
  $("#setting_temperature").textContent = temp;
//Conversion process
  if (timeRegex.test(inputtime)) {
    const [hours, minutes] = inputtime.split(":");

    const totalMin = parseInt(hours) *60 + parseInt(minutes);
   //Countdown time
    const timeFixed = totalMin *60 *1000;
    const immediate = new Date().getTime();
    const countdown = immediate + timeFixed;

    // Ensures that the timer has not reached bottom of counter
    const timer = setInterval(function(){
      const thisDate = new Date().getTime();
      const travel = 0;
      if(travel >0){
         travel = immediate- thisDate;
      }

      const hours = Math.floor (travel/(60*60*1000));
      const minutes = Math.floor ((travel % (60*60*1000))/(1000*60));
      const sec = Math.floor ((travel % (1000*60))/1000);

      document.getElementById("temptime").innerHTML = `${hours}h ${minutes}m ${sec}s`;
      console.log(travel)

      if (travel<0){
        clearInterval(timer);
        $("#setting_temperature").textContent = $("#temperature");
        document.getElementById("temptime").innerHTML = "Countdown complete.";
      }
    }, 1000);
    }  else {
        console.log("Invalid format.");
      }
    }


const startTimer = ()=>{
  const timeinput = document.getElementById("time");

  const timeRegex = /^([0-9]{1,2}):([0-9]{2})$/;

  const inputtime = timeinput.value;

  let origtemp=temperature;
  let temp = $("#temp").value;
  $("#setting_temperature").textContent = temp;
//Conversion process
  if (timeRegex.test(inputtime)) {
    const [hours, minutes] = inputtime.split(":");

    tempTimerTime = (minutes *60) + (hours *60 * 60);

    tempTimer = setInterval(timerInterval, 1000);


  }
}

const timerInterval = ()=>{
  console.log("Tick")

  if(tempTimerTime > 0){
    tempTimerTime -=1;

    console.log(tempTimerTime)
  }else{
    clearInterval(tempTimer)
    //resetting temp logic goes here
  }
  



}



document.addEventListener("DOMContentLoaded", () => {
  //TODO:: Add current date
  $(".dateAndTime").textContent = new Date().toDateString();
  //TODO:: Add Reset Form listener
  $("#reset_form").addEventListener("reset", onReset);
  //TODO:: Add Submit Form listener
  $("#update_settings").addEventListener("click", onSubmit);

  $("#start_temp_timer").addEventListener("click", startTimer);
});

// Password protection function created in last project will not work now, just used existent code, in both codes, don't know why
//var myInput = document.getElementById("password");
//var letter = document.getElementById("letter");
//var capital = document.getElementById("capital");
//var number = document.getElementById("number");
//var length = document.getElementById("length");


//myInput.onfocus = function() {
 // document.getElementById("message").style.display = "block";
//}

//myInput.onblur = function() {
//  document.getElementById("message").style.display = "none";
//}

//myInput.onkeyup = function() {
  //var lowerCaseLetters = /[a-z]/g;

  //if(myInput.value.match(lowerCaseLetters)) {
    //letter.classList.remove("invalid");
    //letter.classList.add("valid");
  //} 
  //else {
    //letter.classList.remove("valid");
    //letter.classList.add("invalid");
//}


  //var upperCaseLetters = /[A-Z]/g;

  //if(myInput.value.match(upperCaseLetters)) {
    //capital.classList.remove("invalid");
    //capital.classList.add("valid");
  //} 
  //else {
    //capital.classList.remove("valid");
    //capital.classList.add("invalid");
  //}

  //var numbers = /[0-9]/g;
  //if(myInput.value.match(numbers)) {
    //number.classList.remove("invalid");
    //number.classList.add("valid");
  //} 
  //else {
   // number.classList.remove("valid");
    //number.classList.add("invalid");
  //}

  //if(myInput.value.length <= 12) {
    //length.classList.remove("invalid");
    //length.classList.add("valid");
  //} 
  //else {
    //length.classList.remove("valid");
    //length.classList.add("invalid");
  //}

  //Timer function breaks all buttons, don't know why, just using date time in this code already existent
  const timeElement = document.querySelector(".time");


  const dateElement = document.querySelector(".date");
  
  
  function formatTime(date) {
    const hours12 = date.getHours() % 12 || 12;
    const minutes = date.getMinutes();
    const isAm = date.getHours() < 12;
  
    return `${hours12.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
  }
  
  
  function formatDate(date){
  
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
    return `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`;
  }
  
  
  setInterval(() =>{
    const now = new Date ();
  
    timeElement.textContent = formatTime(now);
    dateElement.textContent = formatDate(now);
  }, 1000);
  
  
  function update(val) {
   var iTemp = document.getElementById(`temp`).value;
    document.getElementById("tempView").innerHTML = "Temp: " + iTemp + "°C";
  };
  
  
  //function resetForm(){
    //document.getElementById("atm_form").reset();
  //};