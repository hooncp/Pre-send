import styled from 'styled-components';
import {Card} from 'react-bootstrap';


//Product
const ProductCard = styled(Card)`
    width: auto;
    height: auto;   
    padding: 1rem;
    border-radius: 0px !important;
    border: 0px solid rgba(0,0,0,.125) !important;
    &:hover {
        box-shadow: 0 .5rem 2rem rgba(0,0,0,.15)
    }
`;

const ProductCardBody = styled(Card.Body)`
    padding: 1rem 0rem 0rem 0rem !important;
`;

//Infographics

const InfographicCard = styled(Card)`
    display: inline-flex;
    border-radius: 0px !important;
    border: 0px solid rgba(0,0,0,.125) !important;
    margin: 8px 16px 16px;
    text-align: center;
`;

export {
    ProductCard, 
    ProductCardBody,
    InfographicCard
};

