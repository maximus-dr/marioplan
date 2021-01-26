import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {

  const initials = props.profile.initials;

  return (
    <ul className="right">
      <li><NavLink to="/create">New Project</NavLink></li>
      <li><NavLink to="/" onClick={props.signOut}>Log Out</NavLink></li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          { initials }
        </NavLink>
      </li>
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
