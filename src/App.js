import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'

function App() {
  return (
    <>
    <NavBar byCreatedAt='Filter Call by Most Recent' byHighestRated='Filter Call by Highest Rated' />
    <QuestionCard questionTitle='Question Title Goes Here' votesCounter='voteCounter' answersCounter='answerCounter' viewsCounter='viewsCounter'></QuestionCard>
    </>
  );
}

export default App;
