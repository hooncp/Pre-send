import React, { Component } from 'react'
import icon from '../../Assets/Icons/logo-black-pink.png'
import "./footer.css"
import {Link} from 'react-router-dom'


export default class Footer extends Component {
    render() {
        return (
        <footer className="footer bg-light">
              <div className = "row">
                <div className = "col-sm-4">
                  <Link to = "/">
                    <img src = {icon} alt = "logo"/>
                  </Link>
                  <p className="py-2 text-muted small ">&copy; Presend 2020. All Rights Reserved.</p>
                </div>
                <div className = "col-sm-4">
                  <h4 className = "font-weight-bold">About</h4>
                  <div className = "py-2">
                    <Link to = "/faq">FAQ</Link>
                  </div>
                  <div className = "py-2">
                    <Link to = "/about">About</Link>
                  </div>
                  <div className = "py-2">
                    <Link to ="/how">How it works</Link>
                  </div>
                </div>
                <div className = "col-sm-4">
                <h4 className = "font-weight-bold">Contact Us</h4>
                  <div className = "py-2">
                  <a href="https://www.facebook.com/Presend-112179450309018/">Facebook</a>
                  </div>
                  <div className = "py-2">
                  <a href="https://www.instagram.com/pre.send/">Instagram</a>
                  </div>
                </div>
              </div>
        </footer>
        )
    }
}
