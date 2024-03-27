const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "How does a computer get drunk? It takes screenshots!",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "I used to play piano by ear, but now I use my hands.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "What do you call a fish with no eyes? A fsh!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a deer with no eyes? No idea!",
]; 

function generateRandomJoke() {
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)]
}
