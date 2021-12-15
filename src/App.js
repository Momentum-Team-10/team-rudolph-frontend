import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})

  return (
    <>
      <NavBar
        byCreatedAt='Filter Call by Most Recent'
        byHighestRated='Filter Call by Highest Rated'
        userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        user={user}/>
      <QuestionCard
        questionTitle='Question Title Goes Here'
        votesCounter='voteCounter'
        answersCounter='answerCounter'
        viewsCounter='viewsCounter'></QuestionCard>
    </>
  );
}

export default App;
