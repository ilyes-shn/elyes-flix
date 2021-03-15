import React, { useState } from 'react'
import './Nav.scss'

const Nav = () => {
  const [alpha, setAlpha] = useState(0.1)
  return (
    <div className='nav' onMouseLeave={() => setAlpha(0.1)} onMouseEnter={() => setAlpha(0.6)} style={{backgroundColor: `rgba(0,0,0,${alpha})`}}>
      <a href='/'>
      <img src='/elyes.png' alt='Elyes logo'/>
      </a>
    </div>
  )
}

export default Nav
