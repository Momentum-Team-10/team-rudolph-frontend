import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard.js'

export default function Homepage() {
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
    {questionList.map((question) => (
        <Link to={`/questions/${question.pk}`} key={question.pk}>
          <QuestionCard
            questionTitle={question.title}
            votesCounter={question.votes}
            answersCounter={question.answers.length}
            author={question.author.username}
          />
        </Link>
      ))}</>
  )
}