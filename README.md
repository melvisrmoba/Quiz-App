## Quiz App (Quizz Me)

A responsive React based trivia application that fetches real-time quiz questions from [Open Trivia Database API](https://opentdb.com) and allows users to answer, review results, and see their score through an interactive quiz experience.

---

## Live Demo

**Demo** : [https://quizze-me-app.netlify.app/]
**Repository** : [https://github.com/melvisrmoba/Quiz-App]

---

## Screenshots

### Start Screen

![start screen](src\assets\screens\start-screen.png)

### Quiz Screen

![quiz screen](src\assets\screens\quiz-screen.png)

### Results Screen

![result screen](src\assets\screens\result-screen.png)

---

## About The Project

This application that allows users to test their knowledge through dynamically generated quizzes.

The project was built to strengthen core frontend development skills, including API integration, state management, component-based architecture, controlled forms and dynamic UI rendering.

Below are the key features of this application:

- Fetches dynamic trivia questions from an external API
- Randomized answer order for every quiz session
- Interactive multiple-choice question flow
- Prevents quiz submission until all questions are answered
- Score calculation upon answer submission
- Correct and incorrect answer highlighting
- Reusable component-based architecture
- Responsive and accessible UI

---

## Tech Stack

- React + Vite
- Javascript (ES6+)
- CSS3
- Fetch API

---

## Project Structure

```text
src/
|--- components/
|    |--- StartScreen.jsx      # Handles quiz initialization
|    |--- QuizScreen.jsx       # Renders questions and manages quiz submission
|    |--- QuestionCard.jsx     # Displays an individual question
|    |--- AnswerOption.jsx     # Handles answer selection and result states
|    |--- ResultScreen.jsx     # Calculates score and displays answer review
|
|--- App.jsx                   # Manaages global state and application flow
|--- App.css
|--- main.jsx
|--- index.css

```

---

## How It Works

1. User starts the quiz
2. Questions are fetched from API
3. Answers are shuffled before rendering
4. Users selects answers for each question
5. Submission is enabled only after all questions are answered
6. The Results screen displays:
   - Total score
   - Correct answers
   - Incorrect selections

---

## Installation

Clone this repository

```Bash
git clone <repository-url>
```

Navigate into the project directory:

```Bash
cd quiz-app
```

Install dependencies:

```Bash
npm install
```

Start development server:

```Bash
npm run dev
```

---

## Future Improvements

Below are differents potential enhancements to this project:

### Architecture

- [ ] Migrate shared state management to Context API or Zustand
- [ ] Integrate a backend and database for persistent application data
- [ ] TypeScript migration for stronger type safety and maintainability

### UX

- [ ] Loading and error handling
- [ ] Difficulty/category selection
- [ ] Timer based quiz mode
- [ ] Polished UI animations and transitions
- [ ] Accessibility improvements (Keyboard navigation, screen reader support, ARIA attributes)

### Performance

- [ ] Memorization of answer components
- [ ] Implement lazy loading where appropriate
- [ ] Fisher-Yates shuffle implementation

### Quality & Testing

- [ ] Unit testing with Vitest
- [ ] Component testing with React Testing Library
- [ ] E2E testing with

### Product Features

- [ ] User authentication
- [ ] Saved score history
- [ ] Multiplayer quiz mode
- [ ] Dashboard and performance statistics
- [ ] Leaderboards and user rankings

---

## Author

**Melvis Moba**
Frontend developer focused on building responsive, scalabel and user-centered web applications using React and modern Javascript.

---

## License

This project is open source
