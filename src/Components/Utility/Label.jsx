import React, { Component } from 'react'
import styled from 'styled-components'

const LabelWrapper = styled.h3`
    padding: 16px;
    font-size: 25px;
    line-height: 26px;
    font-weight: 600;
    text-align: left;
`;
const ContainerWrapper = styled.div`
    padding: 1rem;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 4px;
    box-shadow: 0 3px 10px 0 rgba(44,44,45,.07), inset 0 0 0 1px rgba(44,44,45,.07);
    margin: 16px;
`;

export default class Label extends Component {
    render() {
        return (
            <LabelWrapper>
                {this.props.name}
            </LabelWrapper>
        )
    }
}
export {ContainerWrapper};
