//user inputs birthdate
var birthMonth = prompt("What number month were you born in?");
var birthDay = prompt("What day were you born on?");
var birthYear = prompt("What year were you born in?");
 

/* var month = document.getElementById('month');
var birthMonth = month.value;
birthMonth = Number(birthMonth);
var day = document.getElementById('day');
var birthDay = day.value;
var year = document.getElementById('year');
var birthYear = year.value; */

//get current date
date = new Date();
var currentYear = date.getFullYear();
//current month is offset by one because it counts January as month 0
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();

//check in console accurate date
console.log( "The year is "+currentYear + ", the month is "+ currentMonth + ", the day is "+currentDay+ ".");
console.log(date);

//current date minus the date born to find the difference
var aliveYears = currentYear - birthYear;
var aliveMonths= currentMonth - birthMonth;
var aliveDays = currentDay - birthDay;
var number= birthYear;

/*check if each year is divisible by 4 with modulo operator
if so, add to the numleaps for every leap year.*/
var numleaps= 0;
while (number <= currentYear) {
    if (number % 4 == 0) {
        numleaps++;
    }
    number++;
}

//check number of leaps is correct in dev console
console.log(numleaps);

//does take into account leap year by adding numleaps, but makes assumption of 30 days in each month
var days = aliveDays + aliveMonths*30+ aliveYears*365 + numleaps;
console.log("You've been alive "+days+ " days.");

var paragraph = document.getElementById("days");
paragraph.textContent += "You've been alive " + days+" days.";

/* things to do yet
-take into account each month is different number of days 
*/
var calculatedays = function() {
    paragraph.textContent += "You've been alive " + days+ " days.";
}

document.getElementsByClassName('year')[0].addEventListener('click', calculatedays);