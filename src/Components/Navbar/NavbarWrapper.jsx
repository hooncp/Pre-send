import React, { Component } from 'react'
import icon from '../../Assets/Icons/logo-black-pink.png'
import {Link} from 'react-router-dom'
import {KitNavbar} from '../../Kit'

export default class NavbarWrapper extends Component {
    render() {
        return (
            <KitNavbar expand = "lg">
                <Link to = "/" className="navbar-brand">
                  <img src = {icon} alt = "Logo"/>
                </Link>
                
            </KitNavbar>
        )
    }
}
