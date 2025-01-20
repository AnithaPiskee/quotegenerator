const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter-btn");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");
let apiQuotes = [];

function ShowLoadinfSpiner() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}
function removeLoadingSpiner() {
    loader.hidden = true;
    quoteContainer.hidden = false;
}
//new random quote
function newQuote() {
    ShowLoadinfSpiner();
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    quoteText.innerText = quote.text;
    authorText.innerText = quote.author;
    if ((quote.text).length > 100) {
        quoteText.classList.add("long-quote");
    } else {
        quoteText.classList.remove("long-quote");
    }
    removeLoadingSpiner();
}

//fetch url
async function getQuote() {
    ShowLoadinfSpiner();
    const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
}
//tweet quote 
function tweetquote() {
    const tweetUrl = `http://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(tweetUrl, "_blank");

}
//on load
getQuote();
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetquote);