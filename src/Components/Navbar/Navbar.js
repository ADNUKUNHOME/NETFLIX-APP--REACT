import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix logo" className="netflixlogo" />
      <div className="nav-shorts">
        <a href="/" className='home'>Home       </a>
        <a href="" className='home'>Movies       </a>
        <a href="#" className='home'>TV Shows</a>
      </div>
      
      <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="avatar" className="avatar" />
    </div>
  )
}

export default Navbar
