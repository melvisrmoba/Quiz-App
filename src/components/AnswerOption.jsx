/**
 * Individual answer option for a question
 */
export default function AnswerOption({
  qId, //question id
  options, //the text of this answer option
  index,
  selectedAnswer,
  onSelectAnswer,
  correctAnswerIndex,
  showResults = false,
}) {
  //Selected answer index for current question
  // const selectedIndex = selectedAnswer;

  //UI state derivation
  const isSelected = selectedAnswer === index;
  const isCorrect = index === correctAnswerIndex;
  const isWrongSelected = isSelected && !isCorrect;

  /**
   * Here, result styling is done by;
   *  Correct answer is always revealed,
   *  Incorrect selected answer is highlighted separately.
   */
  let className = "";
  if (showResults) {
    if (isCorrect) className = "correct";
    else if (isWrongSelected) className = "wrong";
  }
  /**
   * Updates selected answer for current question.
   *
   * Uses functional update to avoid stale state issues during batched React updates
   */
  function handleSelect() {
    if (showResults) return; //prevent answer mutation after submissioon (lock in submit)
    onSelectAnswer(qId, index);
  }
  return (
    /**
     * Label wrapper improves accessibility and increases clickable target area
     */
    <label
      className={`answer 
              ${isSelected ? "selected" : ""}
              ${className}

            `}
    >
      <input
        type="radio"
        //group answers aby question
        name={qId}
        value={options}
        //controlled input
        checked={isSelected}
        onChange={handleSelect}
        //lock interaction after submission
        disabled={showResults}
      />
      <span>{options}</span>
    </label>
  );
}
