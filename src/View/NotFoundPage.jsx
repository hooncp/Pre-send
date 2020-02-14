import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'

export default class NotFoundPage extends Component {
    render() {
        return (
            <Container>
                <h3>The page you are looking for is not found</h3>
                <Link to="/">Go to Home </Link>
                <br/>
            </Container>
        )
    }
}
