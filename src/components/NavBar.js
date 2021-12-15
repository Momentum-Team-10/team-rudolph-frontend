import Login from 'Login';

export default function NavBar({ byCreatedAt, byHighestRated, userImg, user }) {
  return ( 
    <div className="nav-bar">
      <div className="nav-buttons">
        <button>Most Recent</button>
        <button>Highest Rated</button>
      </div>
      <h1 className="sitename">Heard All Day</h1>
      {user ? <img src={userImg} alt="User Avatar" className="avatar" />
        :
        <Login />
      }
    </div> 
  )
}