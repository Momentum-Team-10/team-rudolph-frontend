import axios from 'axios';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function AboutYou({ token }) {
  
  const [bio, setBio] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("click happens")
    console.log(avatar)
    axios.patch("https://questions-t10.herokuapp.com/auth/users/me/", {
      "image_url": avatar,
      "bio": bio,
    }, {
      headers: {
        'Content-Type': 'application/json',
        "Authorization": `Token ${token}`
      }
    })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <>
    <h2>Tell us About Yourself!</h2>
    <form>
      <div className="mv2">
        <label className="db mb2" htmlFor="avatar">
          Link an Image to set your Avatar!
        </label>
        <input
          type="text"
          id="avatar"
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)}
        />
        </div>
      <div className="mv2">
        <label className="db mb2" htmlFor="username">
          Tell us about yourself!
        </label>
        <input
          type="text"
          id="username"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
        />
        </div>
        <Link to={"/"}>
          <button type="submit">Submit</button>  
        </Link>
    </form>
    </>
  )
}