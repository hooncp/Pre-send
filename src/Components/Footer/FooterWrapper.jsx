import React, { Component } from 'react'
import icon from '../../Assets/Icons/logo-black-pink.png'
import {Link} from 'react-router-dom'
import {KitFooter, KitRow, KitCol} from '../../Kit'

export default class FooterWrapper extends Component {
    render() {
        return (
        <KitFooter>
              <KitRow>
                <KitCol sm ="4">
                  <Link to = "/">
                    <img src = {icon} alt = "logo"/>
                  </Link>
                  <p className="text-muted small ">&copy; Presend 2020. All Rights Reserved.</p>
                </KitCol>
                <KitCol sm ="4">
                  <h4 className = "font-weight-bold">About</h4>
                  <div>
                    <Link to = "/faq">FAQ</Link>
                  </div>
                  <div>
                    <Link to = "/about">About</Link>
                  </div>
                  <div>
                    <Link to ="/how">How it works</Link>
                  </div>
                </KitCol>
                <KitCol sm ="4">
                <h4 className = "font-weight-bold">Contact Us</h4>
                  <div>
                  <a href="https://www.facebook.com/Presend-112179450309018/">Facebook</a>
                  </div>
                  <div>
                  <a href="https://www.instagram.com/pre.send/">Instagram</a>
                  </div>
                </KitCol>
              </KitRow>
        </KitFooter>
        )
    }
}
