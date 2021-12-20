import './App.css';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './routes/Homepage'
import QuestionZoom from './routes/QuestionZoom'
import NewQuestion from './routes/NewQuestion';
import UserPage from './routes/UserPage'
import Login from './routes/Login'
import Registration from './routes/Registration'
import AboutYou from './routes/AboutYou'

function App() {
  const [user, setUser] = useState('')
  const [token, setToken] = useState('')
  const [avatar, setAvatar] = useState("")

  const updateAvatar = (newImg) =>
    setAvatar(newImg)


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
        userImg={avatar}
        user={user}
        setAuth={setAuth}
        logout={logout}
      />
      <Routes>
        <Route
          path='/'
          element={<Homepage />} />
        <Route
          path='questions/:questionId'
          element={<QuestionZoom token={token}/>} />
        <Route
          path='questions/newquestion'
          element={<NewQuestion token={token}/>}
          />
        <Route
          path='user/:userId'
          element={<UserPage user={user} token={token} loggedInUser={user} updateAvatar={updateAvatar} />} 
        />
        <Route
          path='/login'
          element={<Login setAuth={setAuth} updateAvatar={updateAvatar} />} 
        />
        <Route
          path='/registration'
          element={<Registration setAuth={setAuth} />} 
        />
        <Route
          path='/aboutyou'
          element={<AboutYou token={token} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
