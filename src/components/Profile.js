import { useState } from 'react';
import axios from 'axios';

const Profile = ({ userImg, profileText, thisUser, token }) => {
  
  const [expAvatar, setExpAvatar] = useState(false)
  const [expBio, setExpBio] = useState(false)
  const [errors, setErrors] = useState(null)
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState('')

  const handleAvatarSubmit = (event) => {
    event.preventDefault()
    console.log("click happens")
    axios.post()
      .then((data) => {
        console.log(data)
      })
      .catch((error) => setErrors(error.message))
  }

  const handleBioSubmit = (event) => {
    event.preventDefault()
    console.log("click happens")
    axios.post()
      .then((data) => {
        console.log(data)
      })
      .catch((error) => setErrors(error.message))
  }

  return (
    <div className="user-profile">
      <div>
        <img src={userImg} alt="User Avatar" />
        <button onClick={() => (expAvatar ? setExpAvatar(false) : setExpAvatar(true))}>Edit Avatar</button>
        {expAvatar && (
          <form onSubmit={handleAvatarSubmit}>
          {/* conditionally show error message */}
          {errors && <div className="bg-red white pa3">{errors}</div>}
          <div className="mv2">
              <label className="db mb2" htmlFor="avatar">
                Link to New Avatar Image
              </label>
              <input
                type="text"
                id="avatar"
                value={avatar}
                onChange={(event) => setAvatar(event.target.value)}
              />
            </div>
          </form>
        )}
      </div>
      <div>
        <p>{profileText}</p>
        <button onClick={() => (expBio ? setExpBio(false) : setExpBio(true))}>Edit Bio</button>
        {expBio && (
          <form onSubmit={handleBioSubmit}>
          {/* conditionally show error message */}
          {errors && <div className="bg-red white pa3">{errors}</div>}
          <div className="mv2">
              <label className="db mb2" htmlFor="username">
                Edit Bio
              </label>
              <input
                type="text"
                id="username"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
              />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Profile;