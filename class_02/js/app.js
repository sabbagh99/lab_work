'use strict'
alert('Hello in about me page, I will give you a quick quiz about me answer with (yes/no)')
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
        alert('Yes you are right')
        break;
}
var name1 = prompt('What is your name? ')
alert(name1 + ' Welcome in my page');
alert(name1 + ' And thank you for answer my qustion')
