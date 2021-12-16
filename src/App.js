import './App.css';
import NavBar from './components/NavBar';
import QuestionCard from './components/QuestionCard.js'
import QuestionCardZoom from './components/QuestionCardZoom.js'
import ResponseCard from './components/ResponseCard.js'
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({})
  const [token, setToken] = useState('')

  function setAuth(username, token) {
    setUser(username)
    setToken(token)
  }

  const logout = () => {
    setUser({})
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
    </>
  );
}

export default App;
