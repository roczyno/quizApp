import "./App.scss";

import React from "react";
import Trivial from "./trivial/Trivial";

const App = () => {
  return (
    <div className="app">
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <span>Quiz</span>
            <div className="timer-container">
              <span className="text">Time</span>
              <span className="number">30</span>
            </div>
          </div>
          <hr />
          <div className="center">
            <Trivial />
          </div>
          <hr />
          <div className="bottom">
            <div className="question-number">
              <span className="first">2</span>
              <span className="second">of</span>
              <span className="third">10</span>
              <p className="last">Questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
