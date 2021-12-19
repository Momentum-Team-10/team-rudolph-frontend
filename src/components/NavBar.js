
import { useState } from 'react';
import Registration from '../routes/Registration';
import { Link } from 'react-router-dom';

export default function NavBar({ byCreatedAt, byHighestRated, userImg, user, setUser, logout, setAuth }) {

  return (
    <div className="nav-bar">
      <div className="nav-div">
        <button>Most Recent</button>
        <button>Highest Rated</button>
      </div>
      <div className="nav-div">
        <Link to="/">
          <h1 className="sitename">In the Weeds</h1>
          <h3>A Site for the Culinarily Curious</h3>
        </Link>
      </div>
      {(user !== '') ? (
        <div className="nav-div">
          <Link to={`/user/${user}`} key={user}>
            <img src={userImg} alt="User Avatar" className="avatar" />
          </Link>
          <button onClick={logout}>Log Out</button>
        </div>
        
        )
        :
        <div className="nav-div">
          <Link to='/login'>
            <span>Login</span>
          </Link>
          <Link to='/registration'>
            <span>Register</span>
          </Link>
        </div>
      }
    </div>
  );
}