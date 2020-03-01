import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {PageContainer} from '../Kit'

export default class NotFoundPage extends Component {
    render() {
        return (
            <PageContainer>
                <h3>The page you are looking for is not found</h3>
                <Link to="/">Go to Home </Link>
                <br/>
            </PageContainer>
        )
    }
}
