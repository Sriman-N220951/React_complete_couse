import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {

 
  return (
  
  <div className="container" >
   <ul className="nav">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">{props.title}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">{props.animal}</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">Link</a>
  </li>
  <li className="nav-item">
    <a className="nav-link disabled" aria-disabled="true">Disabled</a>
  </li>
</ul>
  </div>
  )
}
Navbar.propTypes={
  title: PropTypes.string.isRequired,
   animal:  PropTypes.string
  }
  Navbar.defaultProps= {
    title: 'sriman',
    animal: 'sigma'

  };