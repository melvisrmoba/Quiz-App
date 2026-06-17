//import React hook for managing state inside functional components

import { useState } from "react";
// importing the main screens of the app and each represent a different stage in the quiz flow
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultsScreen from "./components/ResultsScreen";

// import global styles
import "./App.css";

function App() {
  /* STATE MANAGEMENT  SECTION*/

  const [status, setStatus] = useState("start"); // controls which screen is currently displayed

  //stores all fetched and formatted quiz questions
  //Initially empty, populated when user starts quiz
  const [questions, setQuestions] = useState([]);

  //stores user's selected answers
  //Structure looks like this
  // { questionId: selectedAnswerIndex }
  // Example: {0:2,1:3,2:1,3:0}
  const [selectedAnswers, setSelectedAnswers] = useState({});

  //controls  whether results should be revealed or not
  //useful for locking answers and showing correct/incorrect states
  const [showResults, setShowResults] = useState(false);

  /* HELPER FUNCTION */

  //THe API returns HTML-encoded strings (e.g &quot;)
  //This function converts them into normal readable text
  function decodeHTML(str) {
    const txt = document.createElement("textarea");
    txt.innerHTML = str;
    return txt.value;
  }

  /** START QUIZ HANDLER */

  async function handleStart() {
    //Fetch 5 quiz questions from Open Trivia Database API
    const res = await fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple",
    );

    //convert response into JSON format
    const data = await res.json();

    /** Transform API data into a structure that is easier to use in our app */
    const formattedQuestions = data.results.map((q, index) => {
      //Combine incorrect and correct answers into one array
      const answers = [
        ...q.incorrect_answers.map(decodeHTML), // decode each incorrect answer
        decodeHTML(q.correct_answer), //decode correct answer
      ];
      //shuffle answers randomly so the correct answer isn't always last
      const shuffled = answers.sort(() => Math.random() - 0.5);
      return {
        id: index, // unique identifie for each question
        question: decodeHTML(q.question), // decoded question text
        answers: shuffled, //shuffled answer options

        //store index of correct answer AFTER shuffling. This is important for checking correctness later
        correctAnswerIndex: shuffled.indexOf(decodeHTML(q.correct_answer)),
      };
    });

    setQuestions(formattedQuestions); // save formated questions into state
    setSelectedAnswers({}); //Reser any previous answers (this is vital especially when restarting quiz)
    setShowResults(false); // This ensures results are hidden at the start or beginning of the quiz
    setStatus("playing"); // move app to "playing" state and QuizScreen is displayed
  }

  /** FINISH QUIZ HANDLER */
  function handleFinish(e) {
    e.preventDefault(); // This prevents default form submission behavior (page reload)
    setStatus("finished"); // move app to "finished" state, ResultsScreen is displayed
    setShowResults(true); // enable results to be displayed
  }

  /** RESTART QUIZ HANDLER */
  function handleRestart() {
    setSelectedAnswers({}); // reset selected answers or clears previous answers
    setStatus("start"); // sends user back to start screen
  }

  /** ELECTED ANSWER  HANDLER*/
  function handleSelectedAnswer(qId, answerIndex) {
    // This function is not used directly in App, but is passed down to child components for handling answer selection.
    // It updates the selected answer for a specific question in a centralized way.

    setSelectedAnswers((prev) => ({
      ...prev,
      [String(qId)]: answerIndex,
    }));
  }

  /* RENDERING LOGIC */

  /**
   * The app conditionally renders one of three screens based on the current status:
   * - StartScreen: shown when status is "start"
   * - QuizScreen: shown when status is "playing"
   * - ResultsScreen: shown when status is "finished"
   *
   * Each screen receives props relevant to its functionality, such as event handlers and quiz data.
   *
   * QuizScreen is responsible for rendering questions and handling answer selection, while ResultsScreen focuses on displaying results and allowing quiz restart.
   *
   * This separation of concerns keeps the app organized and makes each component easier to manage and test.
   *
   * ResultsScreen displays:
   * -final quiz score
   * -reviewed answers
   * -correct/iincorrect answer states.
   *
   * THis component reuses AnswerOption in "review mode"  by enabling showResults. No local state required; UI derived from props
   */
  return (
    <>
      {/** START SCREEN */}
      {status === "start" && <StartScreen onStart={handleStart} />}

      {/** QUIZ SCREEN */}
      {status === "playing" && (
        <QuizScreen
          onFinish={handleFinish} // Called when user submits quiz
          questions={questions} //All quiz questions
          selectedAnswers={selectedAnswers} //User's selected answers
          onSelectAnswer={handleSelectedAnswer} // function to update answers
          showResults={showResults} //controls answer locking
        />
      )}

      {/** RESULTS SCREEN */}
      {status === "finished" && (
        <ResultsScreen
          onRestart={handleRestart} //Restart quiz
          questions={questions} //Needed to calculate score
          selectedAnswers={selectedAnswers} //User's answers
        />
      )}
    </>
  );
}

export default App;
