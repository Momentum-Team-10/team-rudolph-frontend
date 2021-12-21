import axios from 'axios';
import { Link } from 'react-router-dom'
import { useState } from 'react';

export default function AboutYou({ token, updateAvatar }) {
  
  const [bio, setBio] = useState('')
  const [avatar, setAvatar] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("click happens")
    console.log(avatar)
    console.log(token)
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
        updateAvatar(avatar)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <>
    <h2>Tell us About Yourself!</h2>
    <form onSubmit={handleSubmit}>
      <div className="mb-3 container">
        <label className="form-label" htmlFor="avatar">
          Link an Image to set your Avatar!
        </label>
        <input
          type="text"
          id="avatar"
          value={avatar}
          onChange={(event) => setAvatar(event.target.value)}
          className='form-control'
        />
        </div>
      <div className="mb-3 container">
        <label className="form-label" htmlFor="username">
          Tell us about yourself!
        </label>
        <input
          type="text"
          id="username"
          value={bio}
          onChange={(event) => setBio(event.target.value)}
          className='form-control'
        />
        </div>
        <Link to={"/"}>
          <button type="submit" className='btn btn-primary'>Submit</button>  
        </Link>
    </form>
    </>
  )
}