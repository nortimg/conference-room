import React from 'react'
import styled from 'styled-components'

import Feed from './Feed'
import ChatTabBar from './ChatTabBar'
import THEME from 'theme'
import { IMessageProps } from './Message/Message'
import { ITabProps } from 'components/Tabs/Tab'
import TextArea from './TextArea/TextArea'

interface IChatProps {
    messages:  IMessageProps[]
    tabs: ITabProps[]
}

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    max-width: 240px;
    width: 100%; 
    height: 100%; 
`


const Chat: React.FC<IChatProps> = (props) => {

    return (
        <Wrapper>
            <ChatTabBar 
                tabs={props.tabs}
                backgroundColor={THEME.fluent.PEACH as string}
            />
            <Feed
                messages={props.messages}
            />
            <TextArea />
        </Wrapper>
    )
}

export default Chat