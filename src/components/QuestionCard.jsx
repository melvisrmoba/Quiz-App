import AnswerOption from "./AnswerOption";
/**
 * QuestionCard component represents a single quiz question and its available answers.
 * It is responsible for;
 *  rendering question content,
 *  rendering answer options,
 *  passing selection state down to AnswerOption.
 *
 * This component is stateless and purely for presentational purposes.
 *
 *
 */

export default function QuestionCard({
  qId,
  question,
  answers,
  selectedAnswer,
  onSelectAnswer,
  correctAnswerIndex,
  showResults,
}) {
  return (
    <fieldset className="questionCard-container" key={qId}>
      {/* Question prompt */}
      <legend className="question-text">{question}</legend>

      <div className="answers">
        {/**
         * Renders all available answer options
         * Each AnswerOption receives centralized quiz state instead of maintaining isolated local state; this simplifies scoring and result aggregation
         *
         */}
        {answers.map((option, index) => (
          <AnswerOption
            options={option} // answer value
            key={index}
            index={index} //used for answer  matching/comparisonn
            qId={qId}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={onSelectAnswer} //function to update selected answer in parent state
            //Used for result highlighting after submission
            correctAnswerIndex={correctAnswerIndex}
            showResults={showResults}
          />
        ))}{" "}
      </div>

      {/** Visual separation between questions */}
      <div className="question-divider"></div>
    </fieldset>
  );
}
