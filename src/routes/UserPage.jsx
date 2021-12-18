import Profile from "../components/Profile"
import ResponseCard from "../components/ResponseCard";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import QuestionCard from "../components/QuestionCard";

const UserPage = ({loggedInUser, user, token, updateAvatar}) => {

  const [userQuestions, setUserQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [userInfo, setUserInfo] = useState({});

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
            console.log(response.data)
            setUserInfo(response.data)
            updateAvatar(response.data.img_url)
          })
      })
  }, [])

  return (
    <div>
        <Profile userImg={userInfo.img_url} profileText={userInfo.bio} thisUser={(loggedInUser === user) ? true : false} token={token} />
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