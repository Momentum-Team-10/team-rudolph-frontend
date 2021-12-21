import { Link } from 'react-router-dom';

export default function NavBar({ userImg, user, logout, loggedUserPk }) {

  return (
    <div className="nav-bar">
      <div className="nav-div">
        <Link to="/">
          <h1 className="sitename">Yes, Chef!</h1>
          <h3>A Site for the Culinarily Curious</h3>
        </Link>
      </div>
      {(user !== '') ? (
        <div className="nav-div">
          <Link to={`/user/${user}`} state={{userPk: loggedUserPk}} key={user}>
            <img src={userImg === "" ? "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
                : userImg === null ? "https://miro.medium.com/max/720/1*W35QUSvGpcLuxPo3SRTH4w.png"
                : userImg}
              alt="User Avatar"
              className="avatar" />
            <p>{user}</p>
          </Link>
          <Link to={"/"}>
            <button onClick={logout}>Log Out</button>
          </Link>
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