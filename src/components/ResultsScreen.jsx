import AnswerOption from "./AnswerOption";

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

  // Debug log for answer validation

  // questions.forEach((q) => {
  //   console.log({
  //     question: q.id,
  //     selected: selectedAnswers[q.id],
  //     correct: q.correctAnswerIndex,
  //     match: selectedAnswers[q.id] === q.correctAnswerIndex,
  //   });
  // });

  return (
    <div className="container">
      {/* 🔥 Review Section */}
      {questions.map((q) => {
        return (
          /**
           * Fragment groups question card and divider without introducing unnecessary DOM nodes
           */
          <>
            <fieldset key={q.id} className="questionCard-container">
              <legend className="question-text">{q.question}</legend>
              <div className="answers">
                {/**
                 * Render answers in review-only mode.
                 *
                 * Interaction is disabled via showResults.
                 * Correct/wrong styling is handled internally by AnswerOption
                 */}
                {q.answers.map((ans, index) => {
                  return (
                    <AnswerOption
                      key={index}
                      qId={q.id}
                      index={index}
                      options={ans}
                      selectedAnswers={selectedAnswers}
                      correctAnswerIndex={q.correctAnswerIndex}
                      //Enables result styling and disables interaction
                      showResults={true}
                    />
                  );
                })}
              </div>
            </fieldset>

            {/** Visual separation between reviewed question */}
            <div className="question-divider"></div>
          </>
        );
      })}

      {/** Final score summary and restart action */}
      <div className="results">
        <p className="score-text">
          You scored {score}/{questions.length} correct answers
        </p>
        <button onClick={onRestart}>Play Again</button>
      </div>
    </div>
  );
}
