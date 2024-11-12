import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
      <div className='content'>
        <h1 className='title'>Movie Name</h1>
        <div className='content-buttons'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
        </div>

        <h1 className='description'>Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development to</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  )
}

export default Banner
