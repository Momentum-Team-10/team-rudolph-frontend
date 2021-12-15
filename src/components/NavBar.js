import Login from './Login';

export default function NavBar({ byCreatedAt, byHighestRated, userImg, user, setUser }) {
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
      {(user === !null) ? <img src={userImg} alt="User Avatar" className="avatar" />
        :
        <div className="nav-div">
          <button>Login</button>
          <button>Register</button>
        </div>
      }
    </div> 
  )
}