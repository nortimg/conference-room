import React from 'react'
import styled, { StyledComponent } from 'styled-components'
import THEME from 'theme'

export interface ITabProps {
    closeButton?: boolean
    title: string
    active: boolean
}

const CloseButton = styled.span`
    display: ${(p: { displayed: boolean }) => p.displayed ? 'inline-block' : 'none'}; 
`

interface ITabStyleProps {
    active: boolean
}

const tabColor = (p: ITabStyleProps) => p.active ? 'white' : THEME.fluent.SHADOW_BLUE as string
const Wrapper = styled.button`
    display: inline-block; 
    position: relative; 
    height: 100%;
    border: 0; 
    border-radius: 5px 5px 0 0; 
    padding: 8px 12px; 
    margin-right: 2px; 
    outline: 0; 
    background-color: ${tabColor};
    z-index: ${(p: ITabStyleProps) => p.active ? 1 : 0}; 

    &::after, &::before {
        content: ''; 
        display: block;       
        width: 0; 
        height: 0; 
        position: absolute;
        border-width: 1.5px; 
        border-style: solid; 
        bottom: 0; 
    }

    &::after {
        right: 0; 
        transform: translateX(100%);
        border-color: transparent transparent ${tabColor} ${tabColor};
    }

    &::before {
        left: 0; 
        transform: translateX(-100%);
        border-color: transparent ${tabColor} ${tabColor} transparent;
    }
`


export const Tab: React.FC<ITabProps> = ({ title, closeButton, active }) => {

    return (
        <Wrapper
            active={active}
        >
            {title}
            <CloseButton
                displayed={closeButton ? closeButton : false}
            />
        </Wrapper>
    )
}

export default Tab