import React from "react"

import data from '../json/earthquakes.json';

import "../css/profile.css"

const Profile = () => {

  const profile = JSON.parse(localStorage.getItem('profile'));

  // If the local storage doesn't have profile data, we need to get it.
  if(!profile.avatarImage) {
    localStorage.setItem("profile", JSON.stringify(data.profile));
  }

  return (
    <div>
      <h4 className='profileHeader'>Profile</h4>
      <div className='profileContainer'>
        <div className='imgDiv'>
          <img className='profileImg' alt='' src={profile.avatarImage}></img>
        </div>
        <div className='profileTitles'>
          <p className='title'>First Name</p>
          <p className='title'>Last Name</p>
          <p className='title'>Phone</p>
          <p className='title'>Email</p>
          <p className='title'>Bio</p>
        </div>
        <div className='profileInfo'>
          <p className='info'>{profile.firstName}</p>
          <p className='info'>{profile.lastName}</p>
          <p className='info'>{profile.phone}</p>
          <p className='info'>{profile.email}</p>
          <p className='info'>{profile.bio}</p>
        </div>
      </div>
    </div>
  )
}
export default Profile
