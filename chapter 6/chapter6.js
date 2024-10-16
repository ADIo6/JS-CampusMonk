// ------>DOM, Async Await, API<-------------

const quote = document.getElementsByTagName("blockquote")[0];
const author = document.getElementsByClassName("author")[0];

const newQuote = document.querySelector(".quoteBtn");
const tweetBtn = document.querySelector(".tweetBtn");

const apiLink= " https://quotes-api-self.vercel.app/quote"

// API cALLS ----> Async Await
let temp ;

const getData = async ()=>{
    const response = await fetch(apiLink);
    const data = await response.json();
    // console.log(data.author);
    // console.log(data.quote);
    quote.innerText = data.quote;
    author.innerText = data.author;  
    temp = data.quote;
}
getData();

newQuote.addEventListener("click", ()=>{
    getData();

})
// opening a new window "window.open();"
// window.open(link, name, specification)
tweetBtn.addEventListener("click", ()=>{
    window.open("https://twitter.com/intent/tweet?text="+temp, "tweet post", "width = 400, height = 400" );
})

