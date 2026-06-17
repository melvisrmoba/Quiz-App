import QuestionCard from "./QuestionCard";
import Button from "./Button";
import { Fragment } from "react";

/**
 * ResultScreen displays
 * -final quiz score
 * -reviewed answers
 * -correct/iincorrect answer states.
 *
 * THis component reuses AnswerOption in "review mode"  by enabling showResults. No local state required; UI derived from props
 */

export default function ResultsScreen({
  onRestart,
  questions,
  selectedAnswers,
}) {
  const score = questions.reduce((total, q) => {
    return selectedAnswers[q.id] === q.correctAnswerIndex ? total + 1 : total;
  }, 0);

  return (
    <div className="container">
      {/* 🔥 Review Section */}
      {questions.map((q) => {
        return (
          /**
           * Fragment groups question card and divider without introducing unnecessary DOM nodes
           */
          <Fragment key={q.id}>
            <QuestionCard
              key={q.id} //stable identity for React reconcilliation
              qId={q.id}
              question={q.question}
              answers={q.answers}
              //index used instead of value comparison for performance and consistency
              correctAnswerIndex={q.correctAnswerIndex}
              //State lifted to parent for contralized control
              selectedAnswer={selectedAnswers[q.id]}
              onSelectAnswer={() => {}} //No-op since we don't want to allow answer changes in review mode
              //Used for result highlighting after submission
              showResults={true}
            />
          </Fragment>
        );
      })}

      {/** Final score summary and restart action */}
      <div className="results">
        <p className="score-text">
          You scored {score}/{questions.length} correct answers
        </p>
        <Button onClick={onRestart} children="Play Again" />
      </div>
    </div>
  );
}
