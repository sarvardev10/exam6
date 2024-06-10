import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="container">
      <div className='navbar'>
        <h1 className='lo'>lo<i className='go'>go</i></h1>
        <div className='links'>
         <NavLink className='btn btn-success' to='/'>Home</NavLink>
         <NavLink className='btn btn-success' to='/Users'>Users Info</NavLink>
         <NavLink className='btn btn-success' to='/Contries'>Contries</NavLink>
         <NavLink className='btn btn-success' to='/Cards'>Cards</NavLink>
         <NavLink className='btn btn-success' to='/Alboms'>Albooms</NavLink>
        </div>
      </div>
    </div>
  )
}
