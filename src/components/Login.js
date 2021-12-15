import { useState } from 'react';
import { requestLogin } from '../Ajax.js'

const Login = ({setAuth}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    // axios.post(someUrl).then(data=> setSomeState(data))
    // here is my FAKE REQUEST PLACEHOLDER
    requestLogin(username, password)
      .then((data) => {
        // if we have a response and it includes the auth_token key
        if (data && data.auth_token) {
          // update the parent's state to include auth token
          setAuth(username, data.auth_token)
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