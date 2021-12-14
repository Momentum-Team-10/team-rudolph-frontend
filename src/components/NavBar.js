export default function NavBar({ byCreatedAt, byHighestRated, userImg }) {
  return ( 
    <div className="nav-bar">
      <div className="nav-buttons">
        <button>Most Recent</button>
        <button>Highest Rated</button>
      </div>
      <h1 className="sitename">Heard All Day</h1>
      <img src={userImg} alt="User Avatar" className="avatar" />
    </div> 
  )
}