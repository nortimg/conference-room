import React from 'react'
import styled from 'styled-components'
import THEME from 'theme'

const Quote = styled.div`
    display: flex; 
    margin-top: 5px;
    position: relative;
    max-width: 210px; 
    justify-content: center; 
    position: relative;

    p {
        z-index: 3; 
        font-size: 13px; 
        padding: 10px 10px 15px 5%;
    }
`

const tailSize = 3

const isFromMe = (yes: any, no: any) => (p: {fromMe: boolean}) => p.fromMe ? yes : no
const Background = styled.div`
    width: 100%;
    height: 100%;  
    position: absolute; 
    border-radius: ${isFromMe('5px 5px 0 5px', '0 5px 5px 5px')}; 
    background-color: ${isFromMe(THEME.fluent.BLUE, THEME.fluent.LIGHT_GREY)}; 

    &::before {
        content: '';
        display: block;
        position: absolute; 
        width: ${tailSize}px; 
        height: ${tailSize}px; 
        border-width: ${tailSize}px;
        border-style: solid; 
        transform: ${isFromMe('translateY(100%)', 'translateY(-100%)')};
        border-color: ${isFromMe(
            THEME.fluent.BLUE + ' ' + THEME.fluent.BLUE + ' transparent transparent', 
            'transparent transparent ' + THEME.fluent.LIGHT_GREY + ' ' + THEME.fluent.LIGHT_GREY
        )};
        ${isFromMe('right', 'left')}: 0;
        ${isFromMe('bottom', 'top')}: 0; 
    }
`


interface IMessageContent {
    fromMe: boolean
    text: string
}


const MessageContent: React.FC<IMessageContent> = (props) => {

    return (
        <Quote>
            <p>
                {props.text}
            </p>
            <Background
                fromMe={props.fromMe}
            />
        </Quote>
    )
}

export default MessageContent