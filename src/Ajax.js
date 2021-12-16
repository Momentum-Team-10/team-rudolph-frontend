import axios from 'axios';

export function requestLogin(username, password) {
  // a real login request would go here but in the meantime, we'll fake it
  return loginResponse(username, password)
}

function loginResponse(username, password) {
  axios.get()
}

export function registrationPost(username, password, retypePassword) {
  const registrationURL = "https://questions-t10.herokuapp.com/users/";
  axios.post(registrationURL, {
    username: username,
    password: password,
    re_password: retypePassword
  })
}