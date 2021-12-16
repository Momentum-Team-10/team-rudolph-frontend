import { useState } from 'react';
import axios from 'axios';

const Login = ({setAuth}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("click happens")
    axios.post("https://questions-t10.herokuapp.com/auth/token/login/", {
      "username": username,
      "password": password
    })
      .then((data) => {
        console.log(data)
        if (data && data.data.auth_token) {
          setAuth(username, data.data.auth_token)
        }
      })
      .catch((error) => setErrors(error.message))
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* conditionally show error message */}
      {errors && <div className="bg-red white pa3">{errors}</div>}
      <div className="mv2">
        <label className="db mb2" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <div className="mv2">
        <label className="db mb2" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mv2">
        <button type="submit">Log In</button>
      </div>
    </form>
  )
}

export default Login;