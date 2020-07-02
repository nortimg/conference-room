import React from 'react'
import styled from 'styled-components'
import Bar, { IBarProps } from '../Tabs/Bar'
import { ReactComponent as ExpandSVG } from 'assets/images/expand_chat.svg'
import ExpandBarButton from 'components/Tabs/ExpandBarButton'

interface IChatTabBarProps extends IBarProps { }

const Wrapper = styled.div`
    display: flex; 
    align-items: center;
    background-color: ${(p: { backgroundColor: string }) => p.backgroundColor};
    padding: 6px 14px 0 14px; 
`

const ChatTabBar: React.FC<IChatTabBarProps> = props => {

    return (
        <Wrapper
            backgroundColor={props.backgroundColor}
        >
            <Bar
                tabs={props.tabs}
                backgroundColor={props.backgroundColor}
            />
            <ExpandBarButton>
                <ExpandSVG /> 
            </ExpandBarButton>
        </Wrapper>
    )
}

export default ChatTabBar