//user inputs birthdate
//var birthMonth = prompt("What number month were you born in?");
//var birthDay = prompt("What day were you born on?");
//var birthYear = prompt("What year were you born in?");
 

var birthMonth = document.getElementById('month');
var birthDay = document.getElementById('day');
var birthYear = document.getElementById('year');
birthMonth = birthMonth.value;
birthDay = birthDay.value;
birthYear = birthYear.value;

//get current date
date = new Date();
var currentYear = date.getFullYear();
//current month is offset by one because it counts January as month 0
var currentMonth = date.getMonth() + 1;
var currentDay = date.getDate();

//check in console accurate date
console.log( "The year is "+currentYear + ", the month is "+ currentMonth + ", the day is "+currentDay+ ".");
console.log(date);


var calculatedays = function() {
    var birthMonth = document.getElementById('month');
    var birthDay = document.getElementById('day');
    var birthYear = document.getElementById('year');
    birthYear = birthYear.value;
    birthDay = birthDay.value;
    birthMonth = birthMonth.value;
    console.log(birthMonth);
    console.log(birthYear);
    console.log(birthDay);
    //current date minus birth dates for difference
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
    console.log("There have been" + numleaps + " Leap Years accounted for.");

    //does take into account leap year by adding numleaps, but makes assumption of 30 days in each month
    var days = aliveDays + aliveMonths*30+ aliveYears*365 + numleaps;
    console.log("You've been alive "+days+ " days.");

    var paragraph = document.getElementById("days");
    paragraph.textContent += "You've been alive " + days+" days.";
}

document.getElementsByClassName('bday')[0].addEventListener('click', calculatedays);