'use strict';

// Get elements to update timer countdown in UI
const daysRemaining = document.querySelector('#days');
const hoursRemaining = document.querySelector('#hours');
const minutesRemaining = document.querySelector('#minutes');
const secondsRemaining = document.querySelector('#seconds');

// Set date to next Christmas
let christmasDay = new Date("Dec 25, 2021 00:00:00").getTime();

// function for countdown
let countdownTimer = setInterval(function () {

  // get the current time
  let now = new Date().getTime();

  // calculate the time between the two dates
  let timeRemaining = christmasDay - now;

  // convert time into days, hours, minutes and seconds
  let days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  let hours = Math.floor(timeRemaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
  let minutes = Math.floor(timeRemaining % (1000 * 60 * 60) / (1000 * 60));
  let seconds = Math.floor(timeRemaining % (1000 * 60) / 1000);

  //console.log([days, hours, minutes, seconds]);

  // update UI
  daysRemaining.innerHTML = days;
  hoursRemaining.innerHTML = hours;
  minutesRemaining.innerHTML = minutes;
  secondsRemaining.innerHTML = seconds;

  // if countdown is complete display message
  if (timeRemaining < 0) {
    clearInterval(countdownTimer);
    document.querySelector('#main-heading').innerHTML = 'CHRISTMAS DAY!';
  }
  
  
}, 1000);

