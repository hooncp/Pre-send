import React, { Component } from 'react'
import Card from './CardUI'
import img1 from '../../Assets/bg-showcase-1.jpg'
import img2 from '../../Assets/bg-gift.jpg'

export default class Cards extends Component {
    render() {
        return (
            <div className = "container-fluid">
                <div className = "row">
                    <div className="col-md-2 col-sm-4 col-6 nopadding">                        
                        <Card imgsrc = {img1} title = "S$100 Takashimaya Gift Vouchers"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 nopadding">                        
                        <Card imgsrc = {img2} title = "S$100 Takashimaya Gift Vouchers"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 nopadding">                        
                        <Card imgsrc = {img1} title = "S$100 Takashimaya Gift Vouchers"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 nopadding">                        
                        <Card imgsrc = {img2} title = "S$100 Takashimaya Gift Vouchers"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 nopadding">                        
                        <Card imgsrc = {img1} title = "S$100 Takashimaya Gift Vouchers"/>
                    </div>
                    <div className="col-md-2 col-sm-4 col-6 nopadding">                        
                        <Card imgsrc = {img2} title = "S$100 Takashimaya Gift Vouchers"/>
                    </div>
                </div>  
                
            </div>
        )
    }
}
