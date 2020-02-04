import React, { Component } from 'react'
import icon from '../../Assets/icon2.png'
import "./footer.css"


export default class Footer extends Component {
    render() {
        return (
        <footer className="footer bg-light">
              <div className = "row">
                <div className = "col-sm-4">
                  <a href="#">
                    <img src = {icon}/>
                  </a>
                  <p className="py-2 text-muted small ">&copy; Presend 2020. All Rights Reserved.</p>
                </div>
                <div className = "col-sm-4">
                  <h4 className = "font-weight-bold">About</h4>
                  <div className = "py-2">
                  <a href="#">FAQ</a>
                  </div>
                  <div className = "py-2">
                  <a href="#">About</a>
                  </div>
                  <div className = "py-2">
                  <a href="#">Contact us</a>
                  </div>
                  <div className = "py-2">
                  <a href="#">How it works</a>
                  </div>
                </div>
                <div className = "col-sm-4">
                <h4 className = "font-weight-bold">Contact Us</h4>
                  <div className = "py-2">
                  <a href="#">Facebook</a>
                  </div>
                  <div className = "py-2">
                  <a href="#">Instagram</a>
                  </div>
                </div>
              </div>

        </footer>
        )
    }
}
