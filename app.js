'use strict';

//WELCOME
var user = prompt('Oh hey! What\'s your name?');
console.log('username: ' + user);

alert('Welcome to the game, ' + user + '! It\'s called, \'Who in the World Is Rae Rae?\' Please respond to the following with True or False if you want to play.');

//QUESTION ONE
var answerOne = prompt('Although I\'ve lived in three different countries, I consider Seattle my homebase for probably ever.');
console.log('questionOne: ' + answerOne);

if (answerOne.toLowerCase() === 'true') {
  alert('Correct! I have lived in Italy, Costa Rica, and Ireland, but PNW is best.');
} else {
  alert('Incorrect - I\'m more nomadic than you think, ' + user + '. Keep trying!');
}

//QUESTION TWO
var answerTwo = prompt('I have a graduate degree in Music.');
console.log('questionTwo: ' + answerTwo);

if (answerTwo.toLowerCase() === 'true') {
  alert('Not quite - I have my BS in Piano Performance, and a graduate certificate in Photography.');
} else {
  alert('Impressive. Can\'t slip anything past you!');
}

//QUESTION THREE
var answerThree = prompt('You almost know me now...just a few more - I have taught yoga and led teacher trainings for the last eight years.');
console.log('questionThree: ' + answerThree);

if (answerThree.toLowerCase() === 'true') {
  alert('That\'s right - and I still teach here in Seattle at hauteyoga.');
} else {
  alert('Guess again! I teach and practice yoga every day.');
}

//QUESTION FOUR
var answerFour = prompt('We are almost to friend level, how about this one: I can\'t cook to save my life.');
console.log('questionFour: ' + answerFour);

if (answerFour.toLowerCase() === 'true') {
  alert('Yep. It\'s true. I only have takeout skillz.');
} else {
  alert('I appreciate your faith in me, but that is the wrong answer.');
}

//QUESTION FIVE
var answerFive = prompt('I love to hike, surf, climb, and ski.');
console.log('questionFive: ' + answerFive);

if (answerFive.toLowerCase() === 'true') {
  alert('Correct. These hobbies come from my Nordic heritage.');
} else {
  alert('Fail. My grandparents were Vikings from Oslo, and I am all about adventure at all times.');
}
