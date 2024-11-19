
var quotes = [{quote:`“Be yourself; everyone else is already taken.”`, author:`― Oscar Wilde`}, 
   { 
     quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”`,
     author:`― Bernard M. Baruch`,
  },
  {
      quote:`“You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's nobody listening, And live like it's heaven on earth.” `,
      author:`― William W. Purkey`,
  },
  {
      quote:`“You only live once, but if you do it right, once is enough.”`,
      author:`― Mae West`,
  },
  {
      quote:`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”`,
      author:`― J.K. Rowling, Harry Potter and the Goblet of Fire`, 
  }
]; 


var lastRndm=null;
var random=0;

function getQuote(){
  do {
    // console.log(random);
    document.getElementById('quoteOutput').innerHTML= quotes[random].quote;
    document.getElementById('authorOutput').innerHTML= quotes[random].author;
    random=Math.floor(Math.random()*quotes.length)
  } while (lastRndm == random);
  lastRndm=random
}
