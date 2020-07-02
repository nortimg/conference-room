import React from 'react'
import styled from 'styled-components'

import Tab from './Tab'
import { ITabProps } from './Tab'

export interface IBarProps {
    tabs: ITabProps[]
    backgroundColor: string
}

const Wrapper = styled.div`
    width: 100%; 
    height: 30px; 
    background-color: ${(p: { backgroundColor: string }) => p.backgroundColor}; 
`

const Tabs = styled.div`
    height: 100%; 
`

const Bar: React.FC<IBarProps> = props => {
    const tabs = props.tabs.map(
        (tab, i) => (
            <Tab 
                title={tab.title} 
                closeButton={tab.closeButton} 
                active={tab.active} key={i} 
            />
        )
    )

    return (
        <Wrapper
            backgroundColor={props.backgroundColor}
        >
            <Tabs>
                {tabs}
            </Tabs>
        </Wrapper>
    )
}

export default Bar