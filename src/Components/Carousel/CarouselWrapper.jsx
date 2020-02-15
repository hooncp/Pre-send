import React, { Component } from 'react'
import {KitImage,KitCarousel, KitCarouselItem, CarouselContainer} from '../../Kit'
import Image1 from '../../Assets/Carousel/carousel-1.jpg'
import Image2 from '../../Assets/Carousel/carousel-2.jpg'
import Image3 from '../../Assets/Carousel/carousel-3.jpg'

export default class CarouselWrapper extends Component {
    render() {
        return (
            <CarouselContainer>
            <KitCarousel>
            <KitCarouselItem>
                <KitImage 
                src = {Image1}
                fluid
                />
            </KitCarouselItem>
            <KitCarouselItem>
                <KitImage
                src={Image2}
                fluid
                />
            </KitCarouselItem>
            <KitCarousel.Item>
                <KitImage
                src={Image3}
                fluid
                />
            </KitCarousel.Item>
            </KitCarousel>
            </CarouselContainer>
        )
    }
}

