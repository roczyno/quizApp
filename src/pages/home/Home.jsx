import "./home.scss";

import { useContext, useState } from "react";
import Trivial from "../../trivial/Trivial";
import Timer from "../../components/Timer";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../util/firebase";

const Home = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);

  const [score, setScore] = useState(0);

  const { currentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
  };
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  return (
    <div className="home">
      <div className="container">
        <div className="wrapper">
          <div className="top">
            <div className="user">
              <h1>{currentUser.displayName}</h1>
              {currentUser && <span onClick={handleSignOut}>Logout</span>}
            </div>

            <div className="timer-container">
              <span className="text">Time</span>
              <span className="number">
                {!stop && (
                  <Timer setStop={setStop} questionNumber={questionNumber} />
                )}
              </span>
            </div>
          </div>
          <hr />

          <div className="center">
            {stop ? (
              <div>
                <h1>Your Score is {score}</h1>
              </div>
            ) : (
              <>
                <Trivial
                  data={data}
                  setStop={setStop}
                  setQuestionNumber={setQuestionNumber}
                  questionNumber={questionNumber}
                  setScore={setScore}
                />
              </>
            )}
          </div>
          <hr />
          <div className="bottom">
            <div className="question-number">
              <span className="first">{questionNumber}</span>
              <span className="second">of</span>
              <span className="third">{data.length}</span>
              <p className="last">Questions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
