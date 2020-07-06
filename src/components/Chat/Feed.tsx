import React from 'react'
import styled from 'styled-components'
import Message, { IMessageProps } from './Message/Message'
import THEME from 'theme'

interface IChatFeedProps {
    messages: IMessageProps[]
}

const Wrapper = styled.div`
    display: flex;
    height: 100%; 
    flex-direction: column; 
    align-items: center;
    overflow-y: scroll; 
    padding: 20px 0; 
    background-color: ${THEME.fluent.SECOND_BACKGROUND_COLOR as string};
`

const Feed: React.FC<IChatFeedProps> = (props) => {
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