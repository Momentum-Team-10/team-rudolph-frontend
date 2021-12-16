import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'
import ResponseCard from './components/ResponseCard.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function App() {
  const [user, setUser] = useState({})
  const [questionList, setQuestionList] = useState([])

  useEffect(() => {
    const questionsUrl = 'https://questions-t10.herokuapp.com/questions/'
    axios
      .get(questionsUrl)
      .then((response) => {
        console.log(response.data)
        setQuestionList(response.data)
      })
  }, [])

  return (
    <>
      <NavBar
        byCreatedAt='Filter Call by Most Recent'
        byHighestRated='Filter Call by Highest Rated'
        userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        user={user}
        setUser={setUser} />
      {questionList.map((question) => (
        <Link to={`/questions/${question.pk}`} key={question.pk}>
          <QuestionCard
            questionTitle={question.title}
            votesCounter={question.votes}
            answersCounter={question.answers.length}
            author={question.author}
          />
        </Link>
      ))}
    </>
  );
}

export default App;
