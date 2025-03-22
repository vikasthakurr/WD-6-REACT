import React from 'react'

const ProfileCard = ({name, age, location}) => {
  return (
    <>
    <h2>Profile Cards</h2>
    <h1>Name: {name ? name : 'Unknown'}</h1>
    <h2>Age: {age}</h2>
    <h2>Location: {location }</h2>

    </>
  )
}

export default ProfileCard