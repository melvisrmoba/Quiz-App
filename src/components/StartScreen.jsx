export default function StartScreen({ onStart }) {
  return (
    <div className="start-screen">
      <h1>Quizz Me </h1>
      <p>Let's get started on a simple quiz that will test you</p>
      <button onClick={onStart}>Start Quiz</button>
    </div>
  );
}
