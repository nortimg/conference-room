import React from 'react'
import styled from 'styled-components'

import SidebarTabBar from './SidebarTabBar'
import { IUserCardProps } from './UserCard/UserCard'
import Feed from './Feed'

interface ISidebarProps {
    users: IUserCardProps[]
}

const Wrapper = styled.div`
    display: flex; 
    flex-direction: column;
    align-items: center;
    max-width: 240px; 
    width: 100%;
`

const Sidebar: React.FC<ISidebarProps> = props => {
    // logic about users videos

    return (
        <Wrapper>
            <SidebarTabBar />
            <Feed 
                users={props.users}
            />
        </Wrapper>
    )
}

export default Sidebar