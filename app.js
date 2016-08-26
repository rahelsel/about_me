'use strict';

var counterCorrect = 0;

//WELCOME
function welcome () {
  var user = prompt('Oh hey! What\'s your name?');
  console.log('username: ' + user);


  alert('Welcome to the game, ' + user + '! It\'s called, \'Who in the World Is Rae Rae?\' Please respond to the following statements with True or False.');
}
welcome ();
// //QUESTION ONE
function one () {
  var answerOne = prompt('Seattle is my favorite. True/False?');
  console.log('questionOne: ' + answerOne);

  if (answerOne.toLowerCase() === 'true') {
    alert('Correct! I have lived in Italy, Costa Rica, and Ireland, but PNW is best.');
    counterCorrect++;
  } else if (answerOne.toLowerCase() === 'false') {
    alert('Incorrect - I wear more flannel than you might think, ' + user + '. Keep trying!');
  } else {
    alert ('Sorry! That is not a valid answer - remember to use True or False on the next one!');
  }
}
one ();
debugger;
// //QUESTION TWO
function two () {
  var answerTwo = prompt('True or False: I have a graduate degree in Computer Science.');
  console.log('questionTwo: ' + answerTwo);

  if (answerTwo.toLowerCase() === 'true') {
    alert('Actually, I have my BS in Piano Performance, and a graduate certificate in Photography.');
  } else if (answerTwo.toLowerCase() === 'false') {
    alert('Impressive. How did you already know that?!');
    counterCorrect++;
  } else {
    alert ('Sorry! That is not a valid answer - remember to use True or False on the next one!');
  }
}
two ();
// //QUESTION THREE
function three () {
  var answerThree = prompt('You almost know me now...just a few more - I have taught yoga and led teacher trainings for the last eight years. True or False?');
  console.log('questionThree: ' + answerThree);

  if (answerThree.toLowerCase() === 'true') {
    alert('That\'s right - and I still teach here in Seattle at hauteyoga.');
    counterCorrect++;
  } else if (answerThree.toLowerCase() === 'false'){
    alert('Guess again! I teach and practice yoga every day.');
  } else {
    alert('Sorry! Still gotta use True or False, okay?');
  }
}
three ();
// //QUESTION FOUR
function four () {
  var answerFour = prompt('We are almost to friend level, how about this one: I\'m an amazing cook.');
  console.log('questionFour: ' + answerFour);

  if (answerFour.toLowerCase() === 'true') {
    alert('I appreciate your faith in me, but that is the wrong answer.');
    counterCorrect++;
  } else if (answerFour.toLowerCase() === 'false') {
    alert('You caught me...I only have takout skillz.');
  } else {
    alert('Sorry! That is not a valid answer');
  }
}
four ();
// //QUESTION FIVE
function five () {
  var answerFive = prompt('I love being inside all the time.');
  console.log('questionFive: ' + answerFive);

  if (answerFive.toLowerCase() === 'true') {
    alert('Incorrect. Most of my hobbies come from an adventurous Nordic heritage.');
    counterCorrect++;
  } else if (answerFive.toLowerCase() === 'false') {
    alert('You better believe it. My grandparents were Vikings, so outdoor adventure at all times is how I roll.');
  }
}
five ();
// //QUESTION SIX
//
function six () {
  var luckyNumber = 7;

  for (var i = 0; i < 4; i++) {
    var answerSix = parseInt(prompt('What do you think my lucky number is?'));
    if(answerSix === luckyNumber) {
      alert('Great job! Now you have my password to everything...');
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
      alert('Keep trying. You still have time.');
    }
    if(i === 2) {
      alert('Don\'t give up! You still have one more guess left.');
    }
    if(i === 3) {
      alert('Sorry dude, you are out of guesses.');
    }
  }
}
six ();
// // // //QUESTION SEVEN
function seven () {
  var states = ['Washington', 'California', 'Idaho'];
  var answerSeven = prompt('Last question: try to guess one other state that I have lived in?');

  for (var i = 0; i < states.length; i++) {
    console.log('lived in: ', states[i]);

    if (answerSeven === states[i]) {
      alert('True! You win.');
      counterCorrect++;
      break;
    } else {
      alert('Sorry! But thanks for playing!');
    }
  }
}
seven ();
