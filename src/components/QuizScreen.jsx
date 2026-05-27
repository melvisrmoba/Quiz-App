import QuestionCard from "./QuestionCard";
/** This component is responsible for:
 * 1. Rendering ALL quiz questions
 * 2.Tracking questions to ensure they are all answered (complete state)
 * 3. Handling quiz submission via form
 */
// This component has no knowledge of the scoring logic.
// It delegates answer selection to children and submission handling to parent
export default function QuizScreen({
  onFinish,
  questions,
  selectedAnswers,
  setSelectedAnswers,
  showResults,
}) {
  /** DERIVED STATE
   * A complete state is derived
   * Assumption:
   * Each question must have exactly one answer
   *
   * Trade-off:
   * Using Object.keys is fast and simple, and assumes selectedAnswers stays in sync with questions.
   *
   *
   */
  const allAnswered = Object.keys(selectedAnswers).length === questions.length;

  return (
    /**
     * Using form enables cleaner semantic for "completion" and native submit behaviour
     * OnFinish; prevents default behaviour and transitioning app state.
     */

    <form className="container" onSubmit={onFinish}>
      {/**
       * Renders each question as an isolated unit.
       * QuestionCard is responsible for user interaction (selection)
       * QuizScreen remains focused on orchestration
       *
       */}
      {questions.map((q) => (
        <QuestionCard
          key={q.id} //stable identity for React reconcilliation
          qId={q.id}
          question={q.question}
          answers={q.answers}
          //index used instead of value comparison for performance and consistency
          correctAnswer={q.correctAnswerIndex}
          //State lifted to parent for contralized control
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
          showResults={showResults}
        />
      ))}
      {/* button disabled untill all questions are answered to prevent partial submission*/}
      <button className="btn-check-answers" disabled={!allAnswered}>
        Check Answers
      </button>
    </form>
  );
}
