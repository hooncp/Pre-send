import React, { Component } from 'react'
import Card from './CardUI'


export default class Cards extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className="col-md-3 col-sm-4 col-6 nopadding">                        
                        <Card title = "S$100 Takashimaya Gift Vouchers" price = "1"/>
                    </div>
                </div>  
                
            </div>
        )
    }
}
