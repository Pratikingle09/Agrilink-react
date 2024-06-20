import React from 'react'
import { Link } from 'react-router-dom'

function Feature(props) {
  return (
    <Link to={props.path} className='link'>
    <div className='cart'>
      <img src={props.icon} alt="" />
      <h3>{props.title}</h3>
    </div>
    </Link>
  )
}

export default Feature
