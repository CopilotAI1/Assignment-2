"use strict";

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


function resetForm(){
  document.getElementById("atm_form").reset();
};



const $ = (selector) => document.querySelector(selector);

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");


myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g;

  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } 
  else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}


  var upperCaseLetters = /[A-Z]/g;

  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } 
  else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } 
  else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if(myInput.value.length <= 12) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } 
  else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
