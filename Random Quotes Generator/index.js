const quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "In the middle of difficulty lies opportunity.",
    "The best way to predict the future is to create it.",
    "It is not the strongest of the species that survive, nor the most intelligent, but the one most responsive to change.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "Do not wait for leaders; do it alone, person to person.",
    "Your time is limited, so don't waste it living someone else's life.",
    "Be yourself; everyone else is already taken.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "To live is the rarest thing in the world. Most people exist, that is all.", 
    "It is our choices that show what we truly are, far more than our abilities.",
    "The only way to do great work is to love what you do.",
    "Do not be afraid to give up the good to go for the great.",
    "Innovation distinguishes between a leader and a follower.",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "The only thing we have to fear is fear itself.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "In the end, it's not the years in your life that count. It's the life in your years."
]

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote(){
    const randomIdx = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
}