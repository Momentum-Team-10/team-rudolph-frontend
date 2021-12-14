import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'

function App() {
  return (
    <>
    <NavBar byCreatedAt='Filter Call by Most Recent' byHighestRated='Filter Call by Highest Rated' userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" />
    <QuestionCard questionTitle='Question Title Goes Here' votesCounter='voteCounter' answersCounter='answerCounter' viewsCounter='viewsCounter'></QuestionCard>
    </>
  );
}

export default App;
