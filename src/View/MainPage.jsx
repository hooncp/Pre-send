import React, { Component } from 'react'

import Popular from '../Components/Popular';
import Explore from '../Components/Explore';
import {PageContainer, BannerContainer} from '../Kit';
import CarouselWrapper from '../Components/Carousel/CarouselWrapper';


export default class MainPage extends Component {
    render() {
        return (
            <PageContainer>
                <BannerContainer/>
                <CarouselWrapper/>
                <Explore/>
                <Popular/>
            </PageContainer>
        )
    }
}
