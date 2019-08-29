//user inputs birthdate
var birthMonth = prompt("What number month were you born in?");
var birthDay = prompt("What day were you born on?");
var birthYear = prompt("What year were you born in?");

//get current date
date = new Date();
var currentYear = date.getFullYear();
//current month is offset by one because it counts January as month 0
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();

console.log( "The year is "+currentYear + ", the month is "+ currentMonth + ", the day is "+currentDay+ ".");
console.log(date);
//current date minus the date born to find the difference
var aliveYears = currentYear - birthYear;
var aliveMonths= currentMonth - birthMonth;
var aliveDays = currentDay - birthDay;


//doesn't take into account leap year, and makes assumption of 30 days in each month
var days = aliveDays + aliveMonths*30+ aliveYears*365;
console.log("You've been alive "+days+ " days.");

var paragraph = document.getElementById("days");
paragraph.textContent += "You've been alive " + days+ " days.";


/* things to do yet
-take into account leap year 2020,2016,2014 etc 366 days could do mod4
-take into account each month is different number of days */