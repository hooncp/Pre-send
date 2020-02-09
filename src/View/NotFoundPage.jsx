import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class NotFoundPage extends Component {
    render() {
        return (
            <div className = "page-not-found text-center">
                <h3>The page you are looking for is not found</h3>
                <Link to="/">Go to Home </Link>
                <br/>
            </div>
        )
    }
}
