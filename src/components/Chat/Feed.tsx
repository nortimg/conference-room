import React from 'react'
import styled from 'styled-components'
import Message, { IMessageProps } from './Message/Message'

interface IFeedProps {
    messages: IMessageProps[]
}

const Wrapper = styled.div`
    overflow-y: scroll; 
`

const Feed: React.FC<IFeedProps> = (props) => {
    const messages = props.messages.map(m => (
        <Message
            author={m.author}
            text={m.text}
            date={m.date}
            time={m.time}
            fromMe={m.fromMe}
            photoURL={m.photoURL}
            id={m.id}
            key={m.id}
        />
    ))

    console.log(messages)

    return (
        <Wrapper>
            {
                messages
            }
        </Wrapper>
    )
}


export default Feed