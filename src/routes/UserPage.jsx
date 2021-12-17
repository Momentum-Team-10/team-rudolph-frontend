import Profile from "../components/Profile"
import ResponseCard from "../components/ResponseCard";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import QuestionCard from "../components/QuestionCard"

const UserPage = ({user, token}) => {

  const [userQuestions, setUserQuestions] = useState([])
  const [userProfile, setUserProfile] = useState({})
  const [userAnswers, setUserAnswers] = useState([])
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const questionsUrl = 'https://questions-t10.herokuapp.com/questions/'
    axios
      .get(questionsUrl)
      .then((response) => {
        setUserQuestions(response.data)
      })
    
    axios.get('https://questions-t10.herokuapp.com/auth/users', {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
      .then(response => {
        setUserId(response.data[0].id)
        axios.get(`https://questions-t10.herokuapp.com/user/${userId}/answers/`)
          .then(response => {
            console.log(response.data)
            setUserAnswers(response.data)
          })
      })
  }, [])

  return (
    <div>
        <Profile userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" profileText="Placeholder." />
        {userQuestions.filter(question => question.author === user).map((filteredQuestion) => (
          <Link to={`/questions/${filteredQuestion.pk}`} key={filteredQuestion.pk}>
            <QuestionCard
              questionTitle={filteredQuestion.title}
              votesCounter={filteredQuestion.votes}
              answersCounter={filteredQuestion.answers.length}
              author={filteredQuestion.author}
          />
        </Link>
        ))}
        {userAnswers.map(answer => (
          <Link to={`/questions/${answer.question}`} key={answer.question}>
            <ResponseCard
              responseText={answer.body}
              key = {answer.pk}
              responseUpvotes={24}
              responseDownvotes={10}
              bestAnswer={true}
            />
          </Link>
        ))
        }
    </div>
  )
}

export default UserPage;