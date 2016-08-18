'use strict';

var counterCorrect = 0;

//WELCOME
function one () {
  var user = prompt('Oh hey! What\'s your name?');
  console.log('username: ' + user);


  alert('Welcome to the game, ' + user + '! It\'s called, \'Who in the World Is Rae Rae?\' Please respond to the following statements with True or False.');
}
one ();
//QUESTION ONE
function two () {
  var answerOne = prompt('Although I\'ve lived in three different countries, I consider Seattle my homebase for probably ever. True/False?');
  console.log('questionOne: ' + answerOne);

  if (answerOne.toLowerCase() === 'true') {
    alert('Correct! I have lived in Italy, Costa Rica, and Ireland, but PNW is best.');
    counterCorrect++;
  } else if (answerOne.toLowerCase() === 'false') {
    alert('Incorrect - I\'m more nomadic than you think, ' + user + '. Keep trying!');
  } else {
    alert ('Sorry! That is not a valid answer');
  }
}
two ();
//QUESTION TWO
function three () {
  var answerTwo = prompt('I have a graduate degree in Music.');
  console.log('questionTwo: ' + answerTwo);

  if (answerTwo.toLowerCase() === 'true') {
    alert('Not quite - I have my BS in Piano Performance, and a graduate certificate in Photography.');
  } else if (answerOne.toLowerCase() === 'false') {
    alert('Impressive. Can\'t slip anything past you!');
    counterCorrect++;
  }
}
three ();
//QUESTION THREE
function four () {
  var answerThree = prompt('You almost know me now...just a few more - I have taught yoga and led teacher trainings for the last eight years.');
  console.log('questionThree: ' + answerThree);

  if (answerThree.toLowerCase() === 'true') {
    alert('That\'s right - and I still teach here in Seattle at hauteyoga.');
    counterCorrect++;
  } else if (answerOne.toLowerCase() === 'false'){
    alert('Guess again! I teach and practice yoga every day.');
  } else {
    alert ('Sorry! That is not a valid answer');
  }
}
four ();
//QUESTION FOUR
function five () {
  var answerFour = prompt('We are almost to friend level, how about this one: I can\'t cook to save my life.');
  console.log('questionFour: ' + answerFour);

  if (answerFour.toLowerCase() === 'true') {
    alert('Yep. It\'s true. I only have takeout skillz.');
    counterCorrect++;
  } else if (answerOne.toLowerCase() === 'false') {
    alert('I appreciate your faith in me, but that is the wrong answer.');
  } else {
    alert ('Sorry! That is not a valid answer');
}
five ();
//QUESTION FIVE
function six () {
  var answerFive = prompt('I love to hike, surf, climb, and ski.');
  console.log('questionFive: ' + answerFive);

  if (answerFive.toLowerCase() === 'true') {
    alert('Correct. These hobbies come from my Nordic heritage.');
    counterCorrect++;
  } else if (answerOne.toLowerCase() === 'false') {
    alert('Fail. My grandparents were Vikings from Oslo, and I am all about adventure at all times.');
  }
}
six ();
//QUESTION SIX

function seven () {
  var luckyNumber = 7;

  for (var i = 0; i < 4; i++) {
    var answerSix = parseInt(prompt('What do you think my lucky number is?'));
    if(answerSix === luckyNumber) {
      alert('Great job! You must be psychic.');
      counterCorrect++;
      break;
    } else if(answerSix > luckyNumber) {
      alert('Nope. Too high.');
    } else if(answerSix < luckyNumber) {
      alert('Too low. Try again!');
    } else {
      alert('That is not a valid response.');
    }
    if(i === 1) {
      alert('Nope, but you still have time.');
    }
    if(i === 2) {
      alert('Don\'t give up! You still have one more guess left.');
    }
    if(i === 3) {
      alert('Sorry dude, you are out of guesses.');
    }
  }
}
seven ();
//QUESTION SEVEN
function eight () {
  var states = ['Washington', 'California', 'Idaho'];
  var answerSeven = prompt('Try to guess one other state that I have lived in?');

  for (var i = 0; i < states.length; i++) {
    console.log('lived in: ', states[i]);

    if (answerSeven === states[i]) {
      alert('True! How did you know?');
      break;
    }
  }

  if (!flag) {
    alert('Not quite, but nice try!');
  }
}
eight ();







// var number;
// var counter = 1;
//
// while (number !== 31) {
//   number = parseInt(prompt('How old do you think I am?'));
//
//   if (number < 31) {
//     alert('You\'re sweet, but you guessed too low...');
//     counter++;
//   } else if (number > 31) {
//     alert('Come on, I\'m not an old lady yet! You guessed too high');
//   } else if (number === NaN) {
//     alert('Enter an actual number please.');
//     counter++;
//   }
// }
// console.log('counter:', counter);
