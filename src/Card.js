import React from 'react'

const Card = ({ name, age, gender, title }) => {
  return (
    <div className="card-main">
      <h1>{title} Card</h1>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      <div>Gender: {gender}</div>
    </div>
  )
}

export default Card