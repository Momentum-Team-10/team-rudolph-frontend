import { Link } from 'react-router-dom';

export default function NavBar({ userImg, user, logout, loggedUserPk }) {

  return (
    <div className="navbar navbar-expand-lg">
      <div className="nav-div title">
        <Link to="/">
          <h1 className="sitename">Yes, Chef!</h1>
          <h3 className="site-sub">A Site for the Culinarily Curious</h3>
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
            <h5 className="user-name">{user}</h5>
          </Link>
          <Link to={"/"}>
            <button onClick={logout} className="btn btn-light btn-sm">Log Out</button>
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