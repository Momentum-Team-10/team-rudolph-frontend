import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'
import QuestionCardZoom from './components/QuestionCardZoom.js'
import ResponseCard from './components/ResponseCard.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function App() {
  const [user, setUser] = useState('')
  const [token, setToken] = useState('')
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

  function setAuth(username, token) {
    setUser(username)
    setToken(token)
  }

  const logout = () => {
    setUser({})
    axios.post("https://questions-t10.herokuapp.com/auth/token/logout/")
  }

  return (
    <>
      <NavBar
        byCreatedAt='Filter Call by Most Recent'
        byHighestRated='Filter Call by Highest Rated'
        userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        user={user}
        setAuth={setAuth}
        logout={logout}/>
    <QuestionCard questionTitle='Question Title Goes Here' votesCounter='10' answersCounter='2' viewsCounter='204'></QuestionCard>
    <QuestionCardZoom questionTitle='Question Title Goes Here' questionText='This is the text of the question' attachments='Attachment'></QuestionCardZoom>
    <ResponseCard responseText='Response text goes here' responseUpvotes={25} responseDownvotes={10} bestAnswer={true}></ResponseCard>
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
