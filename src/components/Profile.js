import { useState } from 'react';
import axios from 'axios';

const Profile = ({ userImg, profileText, updateAvatar, token, changeBio }) => {
  
  const [expAvatar, setExpAvatar] = useState(false)
  const [expBio, setExpBio] = useState(false)
  const [avatar, setAvatar] = useState('')
  const [bio, setBio] = useState(profileText)

  const handleAvatarSubmit = (event) => {
    event.preventDefault()
    console.log("click happens")
    console.log(avatar)
    axios.patch("https://questions-t10.herokuapp.com/auth/users/me/", {
      "image_url": avatar,
    }, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Token ${token}`
      }
    })
      .then((data) => {
        console.log(data)
        setAvatar(avatar)
        updateAvatar(avatar)
      })
      .catch((error) => alert(error.message))
  }

  const handleBioSubmit = (event) => {
    event.preventDefault()
    console.log("click happens")
    axios.patch("https://questions-t10.herokuapp.com/auth/users/me/", {
      "bio": bio
    }, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Token ${token}`
      }
    })
      .then((data) => {
        setBio(bio)
        changeBio(bio)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <div className="user-profile">
      <div>
        <img src={userImg} alt="User Avatar" />
        <button onClick={() => (expAvatar ? setExpAvatar(false) : setExpAvatar(true))}>Edit Avatar</button>
        {expAvatar && (
          <form onSubmit={handleAvatarSubmit}>
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
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
      <div>
        <p>{profileText}</p>
        <button onClick={() => (expBio ? setExpBio(false) : setExpBio(true))}>Edit Bio</button>
        {expBio && (
          <form onSubmit={handleBioSubmit}>
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
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Profile;