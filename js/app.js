'use strict';


var userName = prompt('Hi there! May I have your name so I know who\'s taking a quiz about me?');

alert('Hi, ' + userName + '! You\'re about to take a short quiz about me. If you were present and paying attention when everyone introduced themselves the first day, you should be able to get at least 2 of the answers right. :-) Please answer all questions with either yes, no, y, or n.');

var numRight = 0;

var q1 = prompt('Was I born south of the Mason-Dixon line?');

console.log('Answer to Q1: was Justin born south of Mason-Dixon line:', q1);

if (q1.toUpperCase() === 'Y' || q1.toUpperCase() === 'YES') {
  alert('Indeed I was! In Texas, of all places!');
  numRight = numRight + 1;
  console.log('Number correct after Q1:', numRight);
} else {
  alert('Nope! Maybe you\'ll get the next one.');
  console.log('Number correct after Q1:', numRight);
}

var q2 = prompt('Have I ever been out of the United States?');

console.log('Answer to Q2: whether or not Justin has been outside of the United States before:', q2);

if (q2.toUpperCase() === 'Y' || q2.toUpperCase() === 'YES') {
  alert('That\'s correct! Costa Rica, Germany, and Oman, specifically. My Spanish is atrocious and my German is nonexistent, for the record.');
  numRight = numRight + 1;
  console.log('Number correct after Q2:', numRight);
} else {
  alert('Nope! Maybe you\'ll get the next one.');
  console.log('Number correct after Q2:', numRight);
}

var q3 = prompt('Am I over 6 feet tall?');
console.log('Answer to Q3: is Justin over 6 ft tall:', q3);

if (q3.toUpperCase() === 'N' || q3.toUpperCase() === 'NO') {
  alert('Very observant! I\'m just a hair under 6 feet tall these days.');
  numRight = numRight + 1;
  console.log('Number correct after Q3:', numRight);
} else {
  alert('Nope, not quite!');
  console.log('Number correct after Q3:', numRight);
}

var q4 = prompt('Am I interested in skydiving again?');
console.log('Answer to Q4: is Justin interested in skydiving again:', q4);

if (q4.toUpperCase() === 'N' || q4.toUpperCase() === 'NO') {
  alert('You got it! Five times was enough. I don\'t need to push my luck any farther.');
  numRight = numRight + 1;
  console.log('Number correct after Q4:', numRight);
} else {
  alert('Oh heck no! Moving on...');
  console.log('Number correct after Q4:', numRight);
}

var q5 = prompt('Have I ever been married before?');
console.log('Answer to Q5: has Justin been married:', q5);

if (q5.toUpperCase() === 'Y' || q5.toUpperCase() === 'YES') {
  alert('Sure was. I call it my "starter marriage".');
  numRight = numRight + 1;
  console.log('Number correct after Q5:', numRight);
} else {
  alert('As much as I wish you were right, I might never have moved to Seattle had I not been married. Silver linings and all that jazz. :-)');
  console.log('Number correct after Q5:', numRight);
}

alert('Thanks for taking my quiz, ' + userName + '! You got ' + numRight + ' answers right!');


