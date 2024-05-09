// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var inputProgram = prompt("Enter any Character Number or letter");

 if(inputProgram >= 01 && inputProgram <= 999999999999999999999999){
   document.write(`<br> ${inputProgram} is a number <br> <br> <hr>`)
 }
else if(inputProgram >= "a" && inputProgram <= "z"){
   document.write(`<br> ${inputProgram} is a lower case letter <br> <br> <hr>`)
}
else if(inputProgram >= "A" && inputProgram <= "Z"){
   document.write(`<br> ${inputProgram} is a uppercase case letter <br> <br> <hr>`)
}
// else if(``){
//    // document.write(`<br> The given character is not a number or a letter. <br> <br> <hr>`)
// }
else  {
   document.write(`<br> The given character is not a number or a letter. <br> <br> <hr>`)
   
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = +prompt(`Enter the 1st integers`,`10` );
var num2 = +prompt(`Enter the 2nd integers`,`20` )

if(num1 > num2){
   document.write(`<br> The 1st integers ${num1} is larger than 2nd integers ${num2} <br> <br> <hr>`);
}
else if(num2 > num1){
   document.write(` <br> The 2nd integer ${num2} is larger than 1st integers ${num1} <br> <br> <hr>`)
}
else {
 document.write(`<br> The two integers, ${num1} and ${num2}, are equal. <br> <br> <hr>`);
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var program = +prompt(`Enter a number` , `0`)
if(program > 0){
   document.write(`<br> The number is ${program} is negative <br> <br> <hr>`);
}else if(program < 0){
   document.write(`<br> The number is ${program} is positve <br> <br> <hr>`);
}
else{
   document.write(`<br> The num is ${program} is zero <br> <br> <hr>`)
}

// 4. Write a program that takes a character (i.e. string of
//    length 1) and returns true if it is a vowel, false otherwise

var vowel = prompt(`Enter a vowel lettar `);
if(vowel == "a" || vowel == "e" || vowel == "i" || vowel =="o" || vowel == "u"){
   document.write(`<br> ${vowel} is a vowel lettar <br> <br> <hr>`);
}
else if(vowel == "A" || vowel == "E" || vowel == "I" || vowel == "O" || vowel == "U"){
   document.write(`<br> ${vowel} is a vowel lettar <br> <br> <hr>`);
}
else{
   document.write(` <br> is a not vowel lettar <br> <br> <hr>`);
   alert(`is a not vowel lettar`)
}  
// 5. Write a program that
// a. Store correct password in a JS variable.


var userPassword = prompt(`Enter your password`); 
if(userPassword == "Mustafa"){
   alert(`Your password correct`);
   document.write(`<br> Your password is correct <br> <br> <hr> `);
}
else if(null){
   document.write(`<br> Your password is undifine <br> <br> <hr> `);
}
else{
   alert(`Your password is incorrect`);
   document.write("<br>" +  "Your password is incorrect" +"<br> <br> <hr> ");
}

// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;
var hour = 13;
var hour = prompt(`Enter a time`);
if(hour < 18) {
   greeting = "Good day";
   document.write(`<br> Good day <br> <br> <hr>`)
}
else{
greeting = "Good evening";
document.write(`<br> Good evening <br> <br> <hr>`)
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

let shijian = prompt("Enter time (24-hour format): ", "1300");

if (shijian >= 0 && shijian < 6) {
  document.write(`<br/><center> Good night. </center><br/><hr/>`);
} else if (shijian >= 6 && shijian < 12) {
  document.write(`<br/><center> Good morning. </center><br/><hr/>`);
} else if (shijian >= 12 && shijian < 18) {
  document.write(`<br/><center> Good afternoon. </center><br/><hr/>`);
} else if (shijian >= 18 && shijian < 24) {
  document.write(`<br/><center> Good evening. </center><br/><hr/>`);
} else {
  document.write(
    `<br/><center> Please enter time in 24-hour format. </center><br/><hr/>`
  );
}

// var time = prompt(`Enter a time (24-hours format)`);
// if(time >= )