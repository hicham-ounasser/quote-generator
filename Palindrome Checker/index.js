const quotes = [
  "The good thing about JavaScript is that it allows you to do a lot of stupid things. The bad thing about JavaScript is that it allows you to do a lot of stupid things.",
  "JavaScript is like duct tape. It can fix anything, but it looks awful.",
  "JavaScript is a language that runs in web browsers. It allows you to create dynamic and interactive web pages.",
  "Don't make me call you twice.",
  "JavaScript is the assembly language of the web.",
  "JavaScript is everywhere. It's on the web, it's in your phone, it's in your car. It's the future of programming.",
  "The more I learn, the more I realize how much I don't know.",
  "The secret to getting ahead is getting started.",
  "If debugging is your life, you'd better enjoy coffee.",
  "The best way to predict the future is to invent it.",
];

const quoteElement = document.getElementById("quote");
const usedIndexes = new Set();

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
}

while (true) {
  const randomIdx = Math.floor(Math.random() * quotes.length);
  if (usedIndexes.has(randIdx)) continue;
  const quote = quotes[randomIdx];
  quoteElement.innerHTML = quote;
  usedIndexes.add(randomIdx);
  break;
}

// function generateQuote() {
//   const randomIdx = Math.floor(Math.random() * quotes.length);
//   const quote = quotes[randomIdx];
//   quoteElement.innerHTML = quote;
// }
