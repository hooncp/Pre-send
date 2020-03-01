import styled from 'styled-components'

const InfographicCardTitle = styled.p`
    color: black;
    text-align:center;
    font-weight: bold;
    margin-top: 12px;
    font-size: 18px;
    line-height: 22px;
`;

const ProductCardTitle = styled.p`
    font-size: medium;
    font-weight: bold;
    color: black;
`;

const ProductPrice = styled.p`
    color: #fff;
    background: #2a2d36;
    line-height: 24px;
    font-size: 14px;
    display: inline-block;
    position: absolute;
    bottom: 3.5rem;
    left: 10px;
    border-radius: 12px;
    padding: 0 10px;
`;

const SectionLabel = styled.h3`
    padding: 16px;
    font-size: 25px;
    line-height: 26px;
    font-weight: 600;
    text-align: left;
`;

export {InfographicCardTitle, ProductCardTitle, ProductPrice, SectionLabel};