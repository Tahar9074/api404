import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Nav'>
      <Link to="/"><h1>HOME</h1></Link>
     <Link to="/ListOfUsers"> <h1>LIST OF USERS</h1></Link>
    </div>
  )
}

export default Navbar
