import React from 'react'
import styled from 'styled-components'
import Message, { IMessageProps } from './Message/Message'

interface IFeedProps {
    messages: IMessageProps[]
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    overflow-y: scroll; 
    padding: 20px 0; 
    background-color: #F5FAFC;
`

const Feed: React.FC<IFeedProps> = (props) => {
    const messages = props.messages.map((m, i) => (
        <Message
            author={m.author}
            text={m.text}
            date={m.date}
            time={m.time}
            fromMe={m.fromMe}
            photoURL={m.photoURL}
            key={i}
        />
    ))

    return (
        <Wrapper>
            {
                messages
            }
        </Wrapper>
    )
}


export default Feed