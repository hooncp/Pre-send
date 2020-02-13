import React, { Component } from 'react'
import icon from '../../Assets/Icons/logo-black-pink.png'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Row, Col} from 'react-bootstrap'

const Footer = styled.div`
  background-color: #f8f9fa;
  padding: 48px 36px !important
`;

export default class FooterWrapper extends Component {
    render() {
        return (
        <Footer>
              <Row>
                <Col sm ="4">
                  <Link to = "/">
                    <img src = {icon} alt = "logo"/>
                  </Link>
                  <p className="text-muted small ">&copy; Presend 2020. All Rights Reserved.</p>
                </Col>
                <Col sm ="4">
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
                </Col>
                <Col sm ="4">
                <h4 className = "font-weight-bold">Contact Us</h4>
                  <div>
                  <a href="https://www.facebook.com/Presend-112179450309018/">Facebook</a>
                  </div>
                  <div>
                  <a href="https://www.instagram.com/pre.send/">Instagram</a>
                  </div>
                </Col>
              </Row>
        </Footer>
        )
    }
}
