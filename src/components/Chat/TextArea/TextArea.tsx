import React from 'react'
import styled from 'styled-components'

import THEME from 'theme'
import Controls from './Controls'

interface ITextArea { }

const Wrapper = styled.div`
    display: flex; 
    max-height: 120px;
    height: 100%; 
    flex-direction: column; 
    padding: 8px 12px 12px 12px; 
    background-color: #D5E3EF;
`

const MessageInput = styled.textarea`
    display: block; 
    max-width: 216px;
    width: 100%;  
    height: 48px;
    outline: 0; 
    border: 0;
    resize: none;
    border-radius: 6px; 
    padding: 6px 12px;
    margin-top: 8px;
    font-family: 'Roboto', sans-serif;
`

const Send = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 10px; 

    span, button {
        font-size: 10px; 
    }

    span {
        color: #70819A; 
    }

    button {
        text-transform: uppercase; 
        border: 0; 
        outline: 0; 
        background-color: transparent; 
        color: ${THEME.fluent.ICON_BLUE};
        font-weight: bold; 
        cursor: pointer;
    }


`

const TextArea: React.FC<ITextArea> = props => {


    return (
        <Wrapper>
            <Controls />
            <MessageInput
                placeholder="Type your message here"
            />
            <Send>
                <button>send</button>
                <span>or press Ctrl + Enter</span>
            </Send>
        </Wrapper>
    )
}


export default TextArea