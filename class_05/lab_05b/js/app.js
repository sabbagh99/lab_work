'use strict'
alert('Hello in about me page, I will give you a quick quiz about me answer with (yes/no)')
var correctAnswer = 0;
var Q1 = prompt('Do you think my age is 22?');
Q1 = Q1.toLocaleLowerCase();
yourQuestion(Q1);

var Q2 = prompt('My fovarate color is green?');
Q2 = Q2.toLocaleLowerCase();
yourQuestion(Q2);
var Q3 = prompt('Do you think iam living in amman?');
Q3 = Q3.toLocaleLowerCase();
yourQuestion(Q3);

var Q4 = prompt('My fovaraite food is burgar?');
Q4 = Q4.toLocaleLowerCase();
yourQuestion(Q4);
var Q5 = prompt('Do you think iam single');
Q5 = Q5.toLocaleLowerCase();
yourQuestion(Q5);

function yourQuestion(Q) {
    if (Q === 'yes') {
        alert('Your answer is corret');
        correctAnswer++
    } else {
        (Q === 'no')
        alert('Your answer is wrong');
    }
}
    var Q6 = prompt('Just guess a number ');
    var i = 0;

    alert("Your answer is: " + Q6);
    while (Q6 >= 50) {
        Q6 = prompt('Just guess a number ');
        i++
        correctAnswer++
        if (i === 3) {
            alert('Too high');
            alert("you sholud write a number less than 50");
        }
    }

    alert('your answer is: ' + Q6);
    alert('Too low');
    var i = 0;
    var Q7 = prompt('What do you think is my top ten movies ?');
    Q7 = Q7.toLowerCase();
    var answer = ['mad max', 'tron', 'avangers', 'avatar', 'inception', 'interstellar', 'shutter island', 'joker', 'get out', 'the martian'];
    if (answer.includes(Q7)) {
        alert('Your answer is right.');
        correctAnswer++
    }
    else {
        while (!answer.includes(Q7)) {
            Q7 = prompt('What do you think is my top ten movies ?');
            Q7 = Q7.toLowerCase();

            i++
            if (i === 5) {
                alert('write one of this option: Mad Max, tron, Avangers, Avatar, Inception, interstellar, shutter island, Joker, Get Out, The martian');
                prompt('What do you think is my top ten movies ?');
                break;
            }
        }
    }
    if (answer.includes(Q7)) {
        alert('Your answer is right.');
        correctAnswer++
    }
    else {
        alert('Your answer is wrong')
    }
    alert('your correct answer is ' + correctAnswer + ' Of 7');
    var name1 = prompt('What is your name? ')
    alert(name1 + ' Welcome in my page');
    alert(name1 + ' And thank you for answer my qustion');