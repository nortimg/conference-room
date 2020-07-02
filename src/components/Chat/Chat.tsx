import React from 'react'
import Feed from './Feed'
import { IMessageProps } from './Message/Message'

interface IChatProps {
    messages:  IMessageProps[]
}

const Chat: React.FC<IChatProps> = (props) => {

    return (
        <div>
            <Feed
                messages={props.messages}
            />
        </div>
    )
}

export default Chat