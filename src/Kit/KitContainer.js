import styled from 'styled-components';
import {Container} from 'react-bootstrap';

const ProductCardPictureContainer = styled.div`
    display: block;
    width: 100%;
    border-radius: 4px;
    padding-top: 100%;
    position: relative;
    overflow: hidden;
`;

const SectionContainer = styled.div`
    padding: 1rem;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 4px;
    box-shadow: 0 3px 10px 0 rgba(44,44,45,.07), inset 0 0 0 1px rgba(44,44,45,.07);
    margin: 16px 0px 16px 0px;
`;

const PageContainer = styled.div`
    padding-right: 24px;
    padding-left: 24px;
    background-color: white;
    flex: 1;
`;

const BannerContainer = styled.div`
    background-color: #FFDAC1;
    height: 40%;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 0;
`;

const CarouselContainer = styled.div`
    max-height: 360px;
    min-height: 200px;
    object-fit: cover;  
    position:relative;
    overflow: hidden;
`; 

const KitContainer = styled(Container)``;

export {ProductCardPictureContainer, SectionContainer, 
    PageContainer, BannerContainer, KitContainer,
    CarouselContainer};