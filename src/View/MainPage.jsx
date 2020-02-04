import React, { Component } from 'react'

import Popular from '../Components/Popular';
import Explore from '../Components/Explore';
import './page.css'

export default class MainPage extends Component {
    render() {
        return (
            <div className = "page-style">
                <Explore/>
                <Popular/>
            </div>
        )
    }
}
