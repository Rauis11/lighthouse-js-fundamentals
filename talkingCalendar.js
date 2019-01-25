var talkingCalendar = function(date) {


let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

var dateFormatted = new Date(date)
var month = monthNames[dateFormatted.getMonth()]
var year = dateFormatted.getFullYear()


let day = dateFormatted.getDate()
let dayB = ""

switch(day){
  case 1:
  dayB += '1st';
  break;
  case 2:
  dayB += '2nd'
  break;
  case 3:
  dayB += '3rd';
  break;
  case 4:
  dayB += '4th';
  break;
  case 5:
  dayB += '5th';
  break;
  case 6:
  dayB += '6th';
  break;
  case 7:
  dayB += '7th';
  break;
  case 8:
  dayB += '8th';
  break;
  case 9:
  dayB += '9th';
  break;
  case 10:
  dayB += '10th';
  break;
  case 11:
  dayB += '11th';
  break;
  case 12:
  dayB += '12th';
  break;
  case 13:
  dayB += '13th';
  break;
  case 14:
  dayB += '14th';
  break;
  case 15:
  dayB += '15th';
  break;
  case 16:
  dayB += '16th';
  break;
  case 17:
  dayB += '17th';
  break;
  case 18:
  dayB += '18th';
  break;
  case 19:
  dayB += '19th';
  break;
  case 20:
  dayB += '20th';
  break;
  case 21:
  dayB += '21st';
  break;
  case 22:
  dayB += '22nd';
  break;
  case 23:
  dayB += '23rd';
  break;
  case 24:
  dayB += '24th';
  break;
  case 25:
  dayB += '25th';
  break;

}


return month + " " + dayB+", "+year


  // Your code here



};


console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));



