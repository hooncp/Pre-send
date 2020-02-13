import React, { Component } from 'react'
import icon from '../../Assets/Icons/logo-black-pink.png'
import {Link} from 'react-router-dom'
import {Navbar} from 'react-bootstrap'

export default class NavbarWrapper extends Component {
    render() {
        return (
          <div>
            <Navbar bg = "white" expand = "lg">
                <Link to = "/" className="navbar-brand">
                  <img src = {icon} alt = "Logo"/>
                </Link>
                
            </Navbar>
          </div>
        )
    }
}
