import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'
import QuestionCardZoom from './components/QuestionCardZoom.js'
import ResponseCard from './components/ResponseCard.js'
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, Outlet} from 'react-router-dom'

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
      setUser={setUser}/>
      {questionList.map((question) => (
        <Link to={`/${question.pk}`} key={question.index}>
        <QuestionCard
        questionTitle={question.title}
        votesCounter={question.votes}
        answersCounter={question.answers.length}
        author={question.author}
        key={question.index}
        />
        </Link>
      ))}
    <QuestionCard
      questionTitle='Question Title Goes Here'
      votesCounter='10'
      answersCounter='2'
      viewsCounter='204'/>
    <QuestionCardZoom
      questionTitle='Question Title Goes Here'
      questionText='This is the text of the question'
      attachments='Attachment'/>
    <ResponseCard
      responseText='Response text goes here'
      responseUpvotes={24}
      responseDownvotes={10}
      bestAnswer={true}></ResponseCard>
    </>
  );
}

export default App;
