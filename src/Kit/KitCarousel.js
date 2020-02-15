import styled from 'styled-components'
import {Carousel} from 'react-bootstrap'

const KitCarousel = styled(Carousel)`
    position:static !important
`
const KitCarouselItem = styled(Carousel.Item)`
    object-fit: cover !important;
    width:100%
`

export {KitCarousel, KitCarouselItem}