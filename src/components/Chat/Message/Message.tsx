import React from 'react'
import styled from 'styled-components'
import MessageMeta from './MessageMeta'
import MessageContent from './MessageContent'


export interface IMessageProps {
    author: string
    text: string
    date: string
    time: string
    fromMe: boolean
    photoURL: string 
}

const Wrapper = styled.div`
    display: flex; 
    max-width: 210px; 
    flex-direction: ${(p: {flexDirection: string}) => p.flexDirection}; 
`

const Message: React.FC<IMessageProps> = (props) => {

    const flexDirection: string = props.fromMe
        ? 'column-reverse'
        : 'column'

    return (
        <Wrapper flexDirection={flexDirection}>
            <MessageMeta
                fromMe={props.fromMe}
                date={props.date}
                time={props.time}
                photoURL={props.photoURL}
                author={props.author}
            />
            <MessageContent
                fromMe={props.fromMe}
                text={props.text}
            />
        </Wrapper>
    )
}

export default Message