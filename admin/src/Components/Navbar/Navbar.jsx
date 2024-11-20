import React from 'react'
import './Navbar.css'
import LOGO from '../Assets/nav-logo.svg'


const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={LOGO} className='nav-logo' alt="" />
      
    </div>
  )
}

export default Navbar
