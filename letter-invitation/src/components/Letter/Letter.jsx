import React, { useEffect, useState } from "react";
import "./styles/styles.css";
import FormLetter from "./Molecules/FormLetter";
import Thanks from "./Molecules/Thanks";

const Letter = () => {
  const [response, setResponse] = useState();
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) {
      document.getElementById("decline").disabled = true;
      document.getElementById("accept").disabled = true;
    }
  }, [isFinished]);

  return (
    <main className="letter">
      <div className="box__letter">
        <img src="./img/letter.png" alt="letter-info" />
      </div>
      <div className="box_content">
        <div className="box__info">
          <span className="box__title">KINDLY RSVP BELOW BY 30 JUNE 2022</span>
          <div className="box__response">
            <div>
              <input
                onClick={(e) => setResponse(e.target.value)}
                id="accept"
                type="radio"
                name="response"
                className="response__input"
                value="accept"
              />
              <label htmlFor="accept" className="box__icon">
                <span>JOYFULLY ACCEPT</span>
              </label>
            </div>
            <div>
              <input
                onClick={(e) => setResponse(e.target.value)}
                id="decline"
                type="radio"
                name="response"
                className="response__input"
                value="decline"
              />
              <label htmlFor="decline" className="box__icon">
                <span>REGRETFULLY DECLINE</span>
              </label>
            </div>
          </div>
        </div>

        {isFinished ? (
          <Thanks></Thanks>
        ) : (
          <FormLetter
            response={response}
            setIsFinished={setIsFinished}
          ></FormLetter>
        )}
      </div>
    </main>
  );
};

export default Letter;
