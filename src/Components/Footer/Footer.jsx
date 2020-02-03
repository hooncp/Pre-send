import React, { Component } from 'react'
import icon from '../../Assets/icon2.png'


export default class Footer extends Component {
    render() {
        return (
    <footer className="footer">
            <div className = "col-md-6">
            <a className="navbar-brand" href="#">
                  <img src = {icon}/>
            </a>
            </div>
            <div className = "col-md-6">
                <ul className="list-inline">
                <li className="list-inline-item">
              <a href="#">FAQ</a>
            </li>
            <li className="list-inline-item">
              <a href="#">About</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Contact us</a>
            </li>
            <li className="list-inline-item">
              <a href="#">How it works</a>
            </li>

          </ul>
          <p className="text-muted small ">&copy; Presend 2020. All Rights Reserved.</p>
        </div>
            
  </footer>
        )
    }
}
