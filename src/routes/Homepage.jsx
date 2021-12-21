import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from 'react-router-dom'
import QuestionCard from '../components/QuestionCard.js'


export default function Homepage(token) {
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
    <div className="homepage-div">
      <div className="filters">
        <button className="btn btn-info filter-buttons">Most Recent</button>
        <button className="btn btn-info filter-buttons">Highest Rated</button>
      </div>
      {questionList.map((question) => (
          <Link to={`/questions/${question.pk}`} key={question.pk}>
            <QuestionCard
              questionTitle={question.title}
              votesCounter={question.votes}
              answersCounter={question.answers.length}
              author={question.author.username}
              pk={question.author.pk}
              questionId={question.pk}
              token={token}
              votes={question.votes}
            />
          </Link>
        ))}
    </div>
  )
}