import React, { useState } from "react";

const Quote = () => {
  const [quote, setQuote] = useState("");

  const recieveNewQuote = () => {
    fetch("elenabarker-quote-server.glitch.me/")
      .then((response) => {
        setQuote(response.data.quote);
      })
      .catch((error) => {
        console.error("Error fetching quote:", error);
      });
  };

  return (
    <div>
      <p>{quote}</p>
      <button onClick={recieveNewQuote}>Get New Quote</button>
    </div>
  );
};

export default Quote;
