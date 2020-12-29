'use strict'
alert('Hello in about me page, I will give you a quick quiz about me answer with (yes/no)')
var correctAnswer = 0;
var Q1 = prompt('Do you think my age is 32? ');
// console.log(Q1);
alert("Your answer is: " + Q1);
switch (Q1.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('No its actualy 22');
        break;
    case 'no':
    case 'n':
correctAnswer++
        alert('Yes you are right its 22');
        break;
}
var Q2 = prompt('My fovarate color is green?');
// console.log(Q2);
alert("Your answer is: " + Q2);
switch (Q2.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('No its actualy yallow');
        break;
    case 'no':
    case 'n':
    correctAnswer++
        alert('Yes you are right its yallow');
        break;
}
var Q3 = prompt('Do you think iam living in amman?');
// console.log(Q3);
alert("Your answer is: " + Q3);
switch (Q3.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('Yes you are right');
correctAnswer++
        break;
    case 'no':
    case 'n':
        alert('No its actualy i live in amman');
        break;
}
var Q4 = prompt('My fovaraite food is burgar?');
// console.log(Q4);
alert("Your answer is: " + Q4);
switch (Q4.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('No its actualy shawarma');
        break;
    case 'no':
    case 'n':
        alert('Yes you are right its shawarma');
correctAnswer++
        break;
}
var Q5 = prompt('Do you think iam Married');
// console.log(Q5);
alert("Your answer is: " + Q5);
switch (Q5.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('No iam not ');
        break;
    case 'no':
    case 'n':
correctAnswer++
        alert('Yes you are right')
        break;
}
var Q6 = prompt('Just guess a number ');
var i = 0;
// console.log(Q6);
alert("Your answer is: " + Q6);
while(Q6 >=50){
    Q6 = prompt('Just guess a number ');
    i++
correctAnswer++
    if(i === 3){
        alert('Too high');
        alert("you sholud write a number less than 50");
    }
}
alert('your answer is: '+ Q6);
alert('Too low');
var i=0;
var Q7 = prompt('What do you think is my top ten movies ?').toLocaleLowerCase();
var answer = ['Mad Max', 'tron', 'Avangers', 'Avatar', 'Inception', 'interstellar', 'shutter island', 'Joker', 'Get Out', 'The martian'];
if (Q7 === answer[0] ||Q7 === answer[1] ||Q7 === answer[2] ||Q7 === answer[3] ||Q7 === answer[4] ||Q7 === answer[5] ||Q7 === answer[6] ||Q7 === answer[7] ||Q7 === answer[8] ||Q7 === answer[9]){
    alert('Your answer is right.');
    correctAnswer++

}else{
  while(Q7 !== answer[0] ||Q7 !== answer[1] ||Q7 !== answer[2] ||Q7 !== answer[3] ||Q7 !== answer[4] ||Q7 !== answer[5] ||Q7 !== answer[6] ||Q7 !== answer[7] ||Q7 !== answer[8] ||Q7 !== answer[9]){
    Q7 = prompt('What do you think is my top ten movies ?').toLocaleLowerCase();
    i++
    if(i === 6){
        alert('write one of this option: Mad Max, tron, Avangers, Avatar, Inception, interstellar, shutter island, Joker, Get Out, The martian')
    }
  }
}
alert('your correct answer is '+correctAnswer);
var name1 = prompt('What is your name? ')

alert(name1 + ' Welcome in my page');
alert(name1 + ' And thank you for answer my qustion')
