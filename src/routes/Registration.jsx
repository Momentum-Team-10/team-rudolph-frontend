import axios from 'axios';
import { useState } from 'react';
import  { Navigate } from 'react-router'

const Registration = ({setAuth}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setErrors] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password === retypePassword) {
      axios.post("https://questions-t10.herokuapp.com/auth/users/", {
        "username": username,
        "password": password,
        "re_password": retypePassword
      })
        .then((data) => {
          console.log(data);
          if (data && data.data.auth_token) {
            setAuth(username, data.data.auth_token)
            setLoggedIn(true)
          }
        })
        .catch((error) => setErrors(error.message))
    } else {
      alert("Password and Re-typed Password do not match!")
    }
  }


  return ( loggedIn ? <Navigate to="/" /> :
    (<form onSubmit={handleSubmit}>
      <div className="username-register">
        <label htmlFor="usernameInput">Create Username</label>
        <input
          type="text"
          id="usernameInput"
          value={username}
          onChange={(event) => setUsername(event.target.value)}>
        </input>
      </div>
      <div className="mv2">
        <label className="db mb2" htmlFor="passwordInput">
          Create Password
        </label>
        <input
          type="password"
          id="passwordInput"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mv2">
        <label className="db mb2" htmlFor="retypePasswordInput">
          Re-type Password
        </label>
        <input
          type="password"
          id="retypePasswordInput"
          value={retypePassword}
          onChange={(event) => setRetypePassword(event.target.value)}
        />
      </div>
      <div className="mv2">
        <button type="submit">Submit</button>
      </div>
    </form>)
  )
}

export default Registration