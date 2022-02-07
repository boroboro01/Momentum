const quotes = [
    {
        quote : "“That's one small step for a man, one giant leap for mankind.”",
        author : "- Neil Armstrong",
    },
     {
        quote : "“It is a fixer upper of a planet but we could make it work.”",
        author : "- Elon Musk",
    },
     {
        quote : "“Discover the force of the skies O Men: once recognised it can be put to use.”",
        author : "- Johannes Keple",
    },
     {
        quote : "“Across the sea of space, the stars are other suns.”",
        author : "- Carl Sagan",
    },
     {
        quote : "“To confine our attention to terrestrial matters would be to limit the human spirit. ”",
        author : "– Stephen Hawking.",
    },
     {
        quote : "This country was conquered by those who moved forward, and so will space.",
        author : "– John F. Kennedy",
    },
     {
        quote : "“We are finite, in that we are a product and source of the infinite.”",
        author : "- Ilyas Kassam",
    },
     {
        quote : "“We are limited only by our imagination and our will to act.”",
        author : "– Ron Garan.",
    },
     {
        quote : "“Our universe is a sorry little affair unless it has in it something for every age to investigate.”",
        author : "- Seneca",
    },
     {
        quote : "“Astronauts are inherently insane. And really noble.”",
        author : "– Andy Weir",
    },
     {
        quote : "“Earth is the cradle of humanity, but one cannot live in a cradle forever.”",
        author : "- Konstantin Tsiolkovsky",
    },
    
    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuotes.quote;
author.innerText = todayQuotes.author;