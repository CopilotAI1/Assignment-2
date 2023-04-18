"use strict";

const $ = (selector) => document.querySelector(selector);

const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const passwordRegEx = /^(?=.*?[A-Z])(?=.*?[a-z]).{8,}$/;

const onReset = (evt) => {
  resetErrors();
  //TODO:: Reset the reset-able fields
  $("#first_name").value = "";
  $("#last_name").value = "";
  $("#email").value = "";

  $("#password").value = "";
  $("#confirm_password").value = "";

  evt.preventDefault();
};

const resetErrors = () => {
  $("#name_error").textContent = "";
  $("#password_error").textContent = "";
  $("#email_error").textContent = "";
};

const onSubmit = (evt) => {
  resetErrors();
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
  
  //TODO:: Use this boolean to keep track of any errors because you need to prevent the settings
  //       from updating if even one field is wrong
  let formErrors = false;

  let firstName = $("#first_name").value;
  let lastName = $("#last_name").value;
  let email = $("#email").value;
  let password = $("#password").value;
  let confirmPassword = $("#confirm_password").value;
  let dob = new Date($("#dob").value);
  let today = new Date();

  if (firstName == "" || lastName == "") {
    $("#name_error").textContent = "Name fields can't be empty.";
    formErrors = true;
  }

  if (!emailRegEx.test(email)) {
    $("#email_error").textContent = "Email is not valid";
    formErrors = true;
  }

  if (!passwordRegEx.test(password)) {
    $("#password_error").textContent = "Password is not secure.";
    formErrors = true;
  }

  if (password != confirmPassword) {
    $("#password_error").textContent = "Passwords do not match.";
    formErrors = true;
  }

  if (today.setHours(0, 0, 0, 0) < dob) {
    $("#dob_error").textContent = "Date of birth must be in the past.";
    formErrors = true;
  }

  if (!formErrors) {
    $("#user_dob").textContent = dob.toDateString();

    $("#user_password_last_changed").textContent = today.toDateString();

    $("#user_first_name").textContent = $("#first_name");
    $("#user_last_name").textContent = $("#last_name");
    $("#user_email").textContent = $("#email");
  }

  evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
  $("#update_profile").addEventListener("click", onSubmit);

  $("#reset_form").addEventListener("click", onReset);
});
