export default function NavBar({ byCreatedAt, byHighestRated }) {
  return ( 
    <div className="nav-bar">
      <div className="nav-buttons">
        <button>Most Recent</button>
        <button>Highest Rated</button>
      </div>
      <h1 className="sitename">Heard All Day</h1>
      <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="User Avatar" className="avatar" />
    </div> 
  )
}