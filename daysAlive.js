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

var number= birthYear;
var count= 0;
while (number <= currentYear) {
    if (number % 4 == 0) {
        count++;
    }
    number++;
}
console.log(count);
//doesn't take into account leap year, and makes assumption of 30 days in each month
var days = aliveDays + aliveMonths*30+ aliveYears*365 + count;
console.log("You've been alive "+days+ " days.");




var paragraph = document.getElementById("days");
paragraph.textContent += "You've been alive " + days+" days.";


/* things to do yet
-take into account leap year 2020,2016,2014 etc 366 days could do mod4
-take into account each month is different number of days 
check if each year is divisible by 4 with modulo operator
change the count of February days for every leap year. */
var jan = 31;
var feb = 28;
// var feb = 29; ---when year is mod4
var mar = 31;
var april = 30;
var may = 31;
var june = 30;
var july = 31;
var aug = 31;
var sep = 30;
var oct = 31;
var nov = 30;
var dec = 31;
