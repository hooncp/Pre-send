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
    border: 0px solid rgba(0,0,0,.125);
    border-radius: 4px;
    box-shadow: 0 3px 10px 0 rgba(44,44,45,.07), inset 0 0 0 1px rgba(44,44,45,.07);
    background-color: white;
    margin: 20px 0px 0px 0px;
`;

const PageContainer = styled.div`
    padding-right: 24px;
    padding-left: 24px;
    background-color: #E0E0E0;
    flex: 1;
`;

const BannerContainer = styled.div`
    background-color: #E0E0E0;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    z-index: 0;
`;

const CarouselContainer = styled.div`
    position: relative;
    overflow: hidden;
`; 

const KitContainer = styled(Container)``;

export {ProductCardPictureContainer, SectionContainer, 
    PageContainer, BannerContainer, KitContainer,
    CarouselContainer};