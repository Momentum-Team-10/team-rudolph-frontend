import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage'
import QuestionZoom from './routes/QuestionZoom'
import NewQuestion from './routes/NewQuestion';
import UserPage from './routes/UserPage'

function App() {
  const [user, setUser] = useState('')
  const [token, setToken] = useState('')


  function setAuth(username, token) {
    setUser(username)
    setToken(token)
  }

  const logout = () => {
    setUser('')
    axios.post("https://questions-t10.herokuapp.com/auth/token/logout/", {}, {
      headers: {
        "Authorization": `Token ${token}`
      }
    })
  }
  return (
    <Router>
      <NavBar
        byCreatedAt='Filter Call by Most Recent'
        byHighestRated='Filter Call by Highest Rated'
        userImg="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
        user={user}
        setAuth={setAuth}
        logout={logout} />
      <Routes>
        <Route
          path='/'
          element={<Homepage />} />
        <Route
          path='questions/:questionId'
          element={<QuestionZoom user={user} token={token}/>} />
        <Route
          path='questions/newquestion'
          element={<NewQuestion token={token}/>}
          />
        <Route
          path='user/:userId'
          element={<UserPage user={user} token={token} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
