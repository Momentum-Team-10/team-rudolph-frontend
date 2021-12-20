import Profile from "../components/Profile"
import ResponseCard from "../components/ResponseCard";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

const UserPage = ({loggedInUser, user, token, updateAvatar}) => {

  const [userQuestions, setUserQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userImg, setUserImg] = useState('')
  const [userBio, setUserBio] = useState('')

  const changeBio = (newBio) => setUserBio(newBio)

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
        axios.get(`https://questions-t10.herokuapp.com/user/${response.data[0].id}/answers/`)
          .then(response => {
            setUserAnswers(response.data)
          })
        axios.get(`https://questions-t10.herokuapp.com/user/${response.data[0].id}/`)
          .then(response => {
            setUserImg(response.data.image_url)
            updateAvatar(response.data.image_url)
            setUserBio(response.data.bio)
          })
        })
  }, [])

  return (
    <div>
      <Profile
        userImg={userImg === null ? "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png" : userImg}
        profileText={userBio}
        thisUser={(loggedInUser === user) ? true : false}
        token={token}
        changeBio={changeBio}
        updateAvatar={updateAvatar}
      />
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