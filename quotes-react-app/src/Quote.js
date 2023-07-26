import React, { useState } from "react";

const Quote = () => {
  const [quoteData, setQuoteData] = useState({
    quote:
      "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing",
    author: "George Bernhard Shaw",
  });

  const recieveNewQuote = () => {
    fetch("https://elenabarker-quote-server.glitch.me/quotes/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteData(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <p>"{quoteData.quote}"</p>
      <p>- {quoteData.author}</p>
      <button onClick={recieveNewQuote}>Get New Quote</button>
    </div>
  );
};

export default Quote;
