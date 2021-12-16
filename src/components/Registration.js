import { useState } from 'react';
import registrationPost from '../Ajax';

const Registration = ({setAuth}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [error, setErrors] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password === retypePassword) {
      registrationPost(username, password, retypePassword)
        .then((data) => {
          if (data && data.auth_token) {
            setAuth(username, data.auth_token)
          }
        })
        .catch((error) => setErrors(error.message))
    } else {
      alert("Password and Re-typed Password do not match!")
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <div className="username-register">
        <label htmlFor="username">Create Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}>
        </input>
      </div>
      <div className="mv2">
        <label className="db mb2" htmlFor="password">
          Create Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="mv2">
        <label className="db mb2" htmlFor="retypePassword">
          Re-type Password
        </label>
        <input
          type="password"
          id="retypePassword"
          value={retypePassword}
          onChange={(event) => setRetypePassword(event.target.value)}
        />
      </div>
      <div className="mv2">
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default Registration