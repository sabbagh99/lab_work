'use strict'

alert('Hello in about me page, I will give you a quick quiz about me answer with (yes/no)')

var correctAnswer = 0; // counter for user correct answers


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
        alert('its 22');
        break;
}



var Q2 = prompt('My fovarate color is green?');

// console.log(Q2);
alert("Your answer is: " + Q2);
switch (Q2.toLocaleLowerCase()) {
    case 'yes':
    case 'y':
        alert('No it\'s yallow');
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


// give the user 4 attems to guess the number...
// if user answer is correct:
// 1. alert you are right
// counter ++
// exit loop
// if answer biger -> too alert high
// if answer lower -> too low
var i = 0;
for (i = 0; i < 4; i++) {
    var Q6 = Number(prompt('Just guess a number from 1 to 10'));
    if (Q6 === 7) {
        alert('correct');
        correctAnswer++
        break;
    } else if (Q6 > 7) {
        alert('too high')
    } else if (Q6 < 7) {
        alert('too low')
    }
}

var answer = ['mad max', 'tron', 'avangers', 'avatar', 'inception', 'interstellar', 'shutter island', 'joker', 'get out', 'the martian'];
i = 0;

var Q7 = prompt('What do you think is my top ten movies ?');
Q7 = Q7.toLowerCase();

if (answer.includes(Q7)) {
    alert('Your answer is right.');
    correctAnswer++
} else {
    while (!answer.includes(Q7)) {
        Q7 = prompt('What do you think is my top ten movies ?');
        Q7 = Q7.toLowerCase();
        i++
        if (i === 5) {
            alert('write one of this option: Mad Max, tron, Avangers, Avatar, Inception, interstellar, shutter island, Joker, Get Out, The martian')
        }
    } alert('Your answer is right')
}
alert('your correct answer is ' + correctAnswer);

var name1 = prompt('What is your name? ')

alert(name1 + ' Welcome in my page');
alert(name1 + ' And thank you for answer my qustion')