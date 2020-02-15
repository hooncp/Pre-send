import styled from 'styled-components';
import {Image} from 'react-bootstrap'

const InfographicCardImg = styled.img`
    border-radius: 100%;
    width: 80px;
    height: 80px;
    padding: 4px;
    position: relative;
    overflow: hidden;
    object-fit: cover;
`;

const ProductCardImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: ease 0.5s;
`;

const KitImage = styled(Image)`
`;

export {InfographicCardImg, ProductCardImg, KitImage};