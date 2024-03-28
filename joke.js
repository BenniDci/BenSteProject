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

function getJoke() {
  let category = rl.question("\nChoose a category: ").toLowerCase();

  while (!Object.hasOwn(jokes, category)) {
    category = rl
      .question("\nNo matching category found, please try again: ")
      .toLowerCase();
  }
  for (const element in jokes) {
    if (element === category) {
      const randNum = Math.floor(Math.random() * jokes[category].length);
      return `\n > ${jokes[category][randNum]} <`;
    }
  }
}

function addJoke() {
  let category = rl
    .question("\nChoose a category to add the joke in: ")
    .toLowerCase();

  while (!Object.hasOwn(jokes, category)) {
    category = rl
      .question("\nNo matching category found, please try again: ")
      .toLowerCase();
  }

  let joke = rl.question("\nTell me your joke: ");

  for (const cat in jokes) {
    if (cat === category) {
      jokes[category].push(joke);
      return "\nJoke added !";
    }
  }
}

// Developer function
function showArray(category) {
  console.log(`
Jokes in ${category} :
=================
`);
  let counter = 1;
  for (const element of jokes[category]) {
    console.log(`${counter}. ${element}`);
    counter++;
  }
}

const rl = require("readline-sync");

let end = false;
while (!end) {
  // Ask for task
  let key = rl.question("\nGet or Add a joke ? [g/a]: ").toLowerCase();

  while (key !== "g" && key !== "a" && key !== ".") {
    key = rl.question("\nPlease choose add [a] or get [g]: ").toLowerCase();
  }

  if (key === ".") console.log("\n>>> Developer mode ! <<<");
  // Show available categories
  console.log("\nAvailable categories: ");

  for (const cat in jokes) {
    console.log(`- ${cat}`);
  }

  // Go into right decision

  // Adding a joke
  if (key === "a") {
    console.log(addJoke());
  }

  // Get a joke
  if (key === "g") {
    console.log(getJoke());
  }

  // Developer menu
  if (key === ".") {
    const category = rl.question("\nCategory: ");
    showArray(category);
  }

  // Continue ?
  let choice = rl.question("\nContinue [y/n] ?: ");
  while (choice !== "y" && choice !== "n") {
    choice = rl
      .question("\nPlease type [y] to continue or [n] to exit program: ")
      .toLowerCase();
  }
  if (choice === "n") end = true;
  if (choice === "y") end = false;
}

console.log("\nGoodbye !");
