import React from 'react'
import { NavLink } from 'react-router-dom'


export default function SignedOutLinks() {
  return (
    <ul className="right">
      <li><NavLink to="/">Sign up</NavLink></li>
      <li><NavLink to="/">Log in</NavLink></li>
    </ul>
  )
}
