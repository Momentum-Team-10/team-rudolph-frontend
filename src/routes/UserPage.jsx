import Profile from "../components/Profile"
import UserAnswers from "../components/UserAnswers";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import QuestionCard from "../components/QuestionCard"

const UserPage = ({user}) => {

  const [userQuestions, setUserQuestions] = useState([])
  const [userProfile, setUserProfile] = useState({})
  const [userAnswers, setUserAnswers] = useState([])

  useEffect(() => {
    const questionsUrl = 'https://questions-t10.herokuapp.com/questions/'
    axios
      .get(questionsUrl)
      .then((response) => {
        setUserQuestions(response.data)
      })
  }, [])


  return (
    <>
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
        <UserAnswers questionTitle="Placehodler Title" answerData="Placeholder Data" />
    </div>
    </>
  )
}

export default UserPage;