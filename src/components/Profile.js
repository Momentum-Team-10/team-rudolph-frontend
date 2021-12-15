const Profile = ({userImg, profileText}) => {
  return (
    <div className="user-profile">
      <img src={userImg} alt="User Avatar" />
      <p>{profileText}</p>
    </div>
  )
}

export default Profile;