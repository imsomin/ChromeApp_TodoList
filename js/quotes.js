const quotes = [
{ 
    quote: "Men are not prisoners of fate, but only prisoners of their own minds",
    author: "Franklin D. Roosevelt",
},
{
    quote: "To believe with certainty we must begin with doubting",
    author: "Stanislaw Leszcynski",
},
{
    quote: "When you jump for joy, beware that no one moves the ground from beneath your feet",
    author: "stanislaw J. Lec",
},
{
    quote: "Honesty is the best image",
    author: "Tom Wilson",
},
{
    quote: "Aim for success, not perfection. Never give up your right to be wrong",
    author: "Dr. David M. Burns",
},
{
    quote: "We don't know a millionth of one percent about anything",
    author: "Thomas A. Edison",
},
{
    quote: "We would never learn to be patient if there were only joy in the world",
    author: "Helen Keller",
},
{
    quote: "People always call it luck when you've acted more sensibly than they have",
    author: "Anne Tyler",
},
{
    quote: "Just because you love someone doesn't mean you have to be involed with them",
    author: "Hugh Elliott",
},
{
    quote: "I think the prime reason for existence, for living in this world, is discovery",
    author: "James Dean",
}
];


const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
