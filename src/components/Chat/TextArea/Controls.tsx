import React from 'react'
import styled from 'styled-components'

import THEME from 'theme'
import { ReactComponent as FontSVG } from 'assets/images/font.svg'
import { ReactComponent as PlanetSVG } from 'assets/images/planet.svg'
import { ReactComponent as SettingsSVG } from 'assets/images/settings.svg'
import { ReactComponent as SmileSVG } from 'assets/images/smile.svg'

interface IControls { }

const Wrapper = styled.div`
    display: flex; 
    padding: 0 12px;
`

const Control = styled.button`
    display: inline-block;
    border: 0;
    outline: 0; 
    background-color: transparent;
    width: 20px; 
    height: 20px; 
    cursor: pointer;

    &:hover svg path {
        fill: ${THEME.fluent.ICON_DARK_BLUE as string}; 
    }

    &:nth-child(2) {
        margin-left: 16px; 
        margin-right: 16px; 
    }

    &:last-child {
        margin-left: auto; 
        margin-right: 0; 
    }
`

const Controls: React.FC<IControls> = props => {

    return (
        <Wrapper>
            <Control>
                <SmileSVG />
            </Control>
            <Control>
                <FontSVG />
            </Control>
            <Control>
                <PlanetSVG />
            </Control>
            <Control>
                <SettingsSVG />
            </Control>
        </Wrapper>
    )
}

export default Controls