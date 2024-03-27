const jokes = {
  animals: [
    "What do you call a dog that does magic tricks? A labracadabrador!",
    "What do you call a group of cows playing instruments? A moo-sical band.",
    "What do you call a cow with no legs? Ground beef.",
    "What do you call a cat that likes to play basketball? A paw-sitive player.",
    "Why don't elephants use computers? They're afraid of the mouse!",
  ],
  sports: [
    "Why did the golfer get kicked out of the bar? He was hitting on too many balls!",
    "Why was the football stadium so cold? Because there were a lot of fans!",
    "What's the difference between basketball player and a stripper pole? The stripper pole doesn't get fired from it's job after college girls grind on it.",
    "What does your favorite football team and the mailman have in common? They never deliver on Sunday.",
    "How many Liverpool fans does it take to change a light bulb? None they just sit around talking about how good the old one was.",
  ],
  science: [
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a computer get drunk? It takes screenshots!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why was the math book sad ? Because it had too many problems!",
    "Why did the physicist break up with his girlfriend? Because he found her mass to be attractive, but her charge was always negative!",
  ],
  flat: [
    "I used to play piano by ear, but now I use my hands.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fake noodle? An impasta!",
    "Why did the bicycle fall over? Because it was two-tired!",
  ],
};



function getRandomJoke() {
  const input = process.argv.slice(2)[0].toLowerCase();
  for (const element in jokes) {
    if (element === input) {
      // console.log("Input: " + input);
      const randNum = Math.floor(Math.random() * jokes[input].length);
      // console.log("randNum: " + randNum);
};

const input = process.argv.slice(2)[0].toLowerCase();
const jokeInput = process.argv.slice(2)[1];

function getRandomJoke() {
  for (const element in jokes) {
    if (element === input) {
      const randNum = Math.floor(Math.random() * jokes[input].length);
      return jokes[input][randNum];
    }
  }
  return "Argument not accepted";
}

// Version 1

function addJoke() {
  for (const cat in jokes) {
    if (cat === input) {
      jokes[input].push(jokeInput);
      return `Joke added ! 

${jokes[input]}`;
    }
  }
  return "Joke couldn't be added...";
}

    
// Version 2
    
// function addJoke(){
//   const input = process.argv[2];
//   const newInput = process.argv.slice(3).join(' ');
//   if(jokes[input]){
//   jokes[input].push(newInput);
//   console.log('Joke added');
//   return jokes[input]
//   }
//   else{
//     return 'Category not found';
//   }
// }


process.argv.slice(2).length > 1
  ? console.log(addJoke())
  : console.log(getRandomJoke());

