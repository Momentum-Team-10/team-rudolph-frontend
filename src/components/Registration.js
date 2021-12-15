import { useState } from 'react';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');


  return (
    <form>
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