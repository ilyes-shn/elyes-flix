import React, { useState } from 'react'
import './Nav.scss'

const Nav = () => {
  const [alpha, setAlpha] = useState(0.1)
  return (
    <div className='nav' onMouseLeave={() => setAlpha(0.1)} onMouseEnter={() => setAlpha(0.6)} style={{backgroundColor: `rgba(0,0,0,${alpha})`}}>
      <a href='/'>
      <img src='https://occ-0-1723-1722.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABWLSvtmQpJRdBNMOALxikm0K0aZMXftmj9zb5sx4RgHtauEK2hP_rYOO0V0RqsnAn_wUc1EtvcJ_yBjxqz-Twoo96l8qp9zmKbVn.png?r=bee' alt='netflix logo'/>
      </a>
    </div>
  )
}

export default Nav
