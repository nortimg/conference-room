import React from 'react'
import styled from 'styled-components'

import THEME from 'theme'

interface IAreaProps { }

const Wrapper = styled.div`
    width: 100%; 
    height: 100%; 
    position: relative; 
    background-color: ${THEME.fluent.DARK_GREY as string}; 
    padding: 24px;
`

const Paper = styled.div`
    background-color: white; 
    width: 100%; 
    height: 100%; 
    max-height: 1000px; 
    box-shadow: 0px 6px 12px rgba(12, 37, 73, 0.08), 0px 1px 4px rgba(1, 30, 72, 0.24);
`

const Area: React.FC<IAreaProps> = props => {


    return (
        <Wrapper>
            <Paper /> 
        </Wrapper>
    )
}

export default Area