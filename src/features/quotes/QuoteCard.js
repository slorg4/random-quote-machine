import getRandomQuote from "../../utils/quotes";
import getRandomColor from "../../utils/colors";

import { useState } from "react";
import React from "react";

function QuoteCard() {
  const { primary, secondary } = getRandomColor();

  const [quote, setQuote] = useState(getRandomQuote());
  const [primaryColor, setPrimaryColor] = useState(primary);
  const [secondaryColor, setSecondaryColor] = useState(secondary);

  const onChangeQuote = () => {
    const { primary, secondary } = getRandomColor();
    setQuote(getRandomQuote());
    setPrimaryColor(primary);
    setSecondaryColor(secondary);
  };

  return (
    <div
      id="main-container"
      className="d-flex flex-lg-column justify-content-center align-items-center vh-100"
      style={{ backgroundColor: primaryColor }}
    >
      <div id="quote-box" className="border rounded">
        <div className="d-flex flex-row" id="text">
          <i
            className="fa fa-comment me-3 mt-1"
            style={{ color: primaryColor }}
          ></i>
          <h2 className="text-center" style={{ color: primaryColor }}>
            "{quote.content}"
          </h2>
        </div>
        <div id="author">
          <p className="fs-4 text-end" style={{ color: primaryColor }}>
            - {quote.author}
          </p>
        </div>
        <div id="buttons" className="d-flex justify-content-between">
          <a 
            id="tweet-quote" 
            title="Tweet this quote!" 
            className="col-auto" 
            target="_blank"
            rel="noreferrer" 
            href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.content}" ${quote.author}`}
          >
            <i
              className="fa fa-twitter-square"
              onMouseOver={(e) => {
                e.target.style.color = secondaryColor;
              }}
              onMouseLeave={(e) => {
                e.target.style.color = primaryColor;
              }}
              style={{ color: primaryColor }}
            ></i>
          </a>
          <button
            id="new-quote"
            className="col-auto fs-6 fw-bold btn"
            style={{ backgroundColor: primaryColor, color: "white" }}
            onMouseOver={(e) => {
              e.target.style.background = secondaryColor;
            }}
            onMouseLeave={(e) => {
              e.target.style.background = primaryColor;
            }}
            onClick={onChangeQuote}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
