import Profile from "../components/Profile"
import ResponseCardProfile from "../components/ResponseCardProfile";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import QuestionCardProfile from "../components/QuestionCardProfile";

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
      <div>
        <h3>{username}'s Questions</h3>
        {userQuestions.map((filteredQuestion) => (
          <Link className='question-card-title-link' to={`/questions/${filteredQuestion.pk}`} key={filteredQuestion.pk}>
            <QuestionCardProfile
              questionTitle={filteredQuestion.title}
              questionText={filteredQuestion.body}
              votes={filteredQuestion.votes}
              key={filteredQuestion.pk}
          />
          </Link>
        ))}
      </div>
      <div>
        <h3>{username}'s Answers</h3>
        {userAnswers.map(answer => (
          <Link to={`/questions/${answer.question}`} key={answer.question}>
            <ResponseCardProfile
              responseText={answer.body}
              key = {answer.pk}
              votes={answer.votes}
            />
          </Link>
        ))
        }
      </div>
    </div>
  )
}

export default UserPage;