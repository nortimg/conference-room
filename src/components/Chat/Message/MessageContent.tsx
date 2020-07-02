import React from 'react'
import styled from 'styled-components'
import THEME from 'theme'

const Quote = styled.div`
    display: flex; 
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
let Background = styled.div`
    width: 100%;
    height: 100%;  
    position: absolute; 

    &::before {
        content: '';
        display: block;
        position: absolute; 
        width: ${tailSize}px; 
        height: ${tailSize}px; 
        border-width: ${tailSize}px;
        border-style: solid; 
    }
`

const MyQuote = styled(Background)`
    background-color: ${THEME.fluent.BLUE}; 
    &::before {
        transform: translateY(100%);
        border-color: ${THEME.fluent.BLUE} ${THEME.fluent.BLUE} transparent transparent;
        right: 0; 
        bottom: 0;
    }
`

const TalkerQuote = styled(Background)`
    background-color: ${THEME.fluent.LIGHT_GREY}; 
    &::before {
        transform: translateY(-100%);
        border-color: transparent transparent ${THEME.fluent.LIGHT_GREY} ${THEME.fluent.LIGHT_GREY};
        left: 0; 
        top: 0;
    }
`

interface IMessageContent {
    fromMe: boolean
    text: string
}


const MessageContent: React.FC<IMessageContent> = (props) => {

    Background = props.fromMe ? MyQuote : TalkerQuote

    return (
        <Quote>
            <p>
                {props.text}
            </p>
            <Background />
        </Quote>
    )
}

export default MessageContent