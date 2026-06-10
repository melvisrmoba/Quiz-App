## Quiz App

A responsive React based trivia application that fetches real-time quiz questions from [Open Trivia Database API](https://opentdb.com) and allows users to answer, review results, and see their score through an interactive quiz experience.

## Features

- Fetches dynamic trivia questions from an external API
- Randomized answer order for every quiz session
- Interactive multiple-choice question flow
- Prevents quiz submission until all questions are answered
- Score calculation upon answer submission
- Correct and incorrect answer highlighting
- Reusable component-based architecture
- Responsive and accessible UI

## Built With

- React + Vite
- Javascript (ES6+)
- CSS3
- Fetch API

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
