import React, { Component } from 'react'
import icon from '../../Assets/Icons/logo-black-pink.png'
import './navbar.css';

export default class Navbar extends Component {
    render() {
        return (
          <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <a className="navbar-brand" href="#">
                  <img src = {icon}/>
                </a>
                
                {/* <div className = "search-bar-style">
                <input type="text" className = "search-bar" placeholder="Search.."></input>
                </div> */}
                
            </nav>
          </div>
        )
    }
}
