import Login from './Login';
import { useState } from 'react';
import Registration from './Registration';

export default function NavBar({ byCreatedAt, byHighestRated, userImg, user, setUser, logout, setAuth }) {
  const [loggedUser, setLoggedUser] = useState(user);
  const [expanded, setExpanded] = useState(false);
  const [expRegister, setExpRegister] = useState(false);

  return (
    <div className="nav-bar">
      <div className="nav-div">
        <button>Most Recent</button>
        <button>Highest Rated</button>
      </div>
      <div className="nav-div">
        <h1 className="sitename">In the Weeds</h1>
        <h3>A Site for the Culinarily Curious</h3>
      </div>
      {(user !== '') ? (
        <>
        <img src={userImg} alt="User Avatar" className="avatar" />
        <button onClick={logout}>Log Out</button>
        </>
        )
        :
        <div className="nav-div">
          <button onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}>Login</button>
          {expanded && <Login setAuth={setAuth}/>}
          <button onClick={() => (expRegister ? setExpRegister(false) : setExpRegister(true))}>Register</button>
          {expRegister && <Registration setAuth={setAuth} />}
        </div>
      }
    </div>
  );
}