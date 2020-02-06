import React, { Component } from 'react'
import icon from '../../Assets/Icons/logo-black-pink.png'
import {Link} from 'react-router-dom'
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <Link to = "/" className="navbar-brand">
                  <img src = {icon} alt = "Logo"/>
                </Link>
                
                {/* <div className = "search-bar-style">
                <input type="text" className = "search-bar" placeholder="Search.."></input>
                </div> */}
                
            </nav>
          </div>
        )
    }
}
