import Profile from "../components/Profile"
import ResponseCard from "../components/ResponseCard";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

const UserPage = ({loggedInUser, user, token, updateAvatar, loggedUserPk}) => {

  const [userQuestions, setUserQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userImg, setUserImg] = useState('')
  const [userBio, setUserBio] = useState('')
  const [username, setUsername] = useState('')
  const [userPk, setUserPk] = useState(useLocation().state.userPk)

  const changeBio = (newBio) => setUserBio(newBio)

  useEffect(() => {
    axios.get(`https://questions-t10.herokuapp.com/user/${userPk}/`)
      .then(response => {
        setUserImg(response.data.image_url)
        setUserBio(response.data.bio)
        setUsername(response.data.username)
        setUserAnswers(response.data.answers)
        setUserQuestions(response.data.questions)
      })
  }, [])

  return (
    <div>
      <Profile
        userImg={userImg === null ? "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png" : userImg}
        profileText={userBio}
        thisUser={(user === username) ? true : false}
        token={token}
        changeBio={changeBio}
        updateAvatar={updateAvatar}
        username={username}
      />
        {userQuestions.map((filteredQuestion) => (
          <Link to={`/questions/${filteredQuestion.pk}`} key={filteredQuestion.pk}>
            <QuestionCard
              questionTitle={filteredQuestion.title}
              votesCounter={filteredQuestion.votes}
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