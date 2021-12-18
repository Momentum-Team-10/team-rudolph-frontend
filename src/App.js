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
  const [avatar, setAvatar] = useState("https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png")

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
          element={<QuestionZoom />} />
        <Route
          path='questions/newquestion'
          element={<NewQuestion token={token}/>}
          />
        <Route
          path='user/:userId'
          element={<UserPage user={user} token={token} loggedInUser={user} updateAvatar={updateAvatar} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
