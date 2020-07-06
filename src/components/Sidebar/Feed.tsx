import React from 'react'
import styled from 'styled-components'

import THEME from 'theme'
import UserCard, { IUserCardProps } from './UserCard/UserCard'

interface ISidebarFeedProps {
    users: IUserCardProps[]
}



const Wrapper = styled.div`
    width: 100%;  
    height: 100%; 
    display: inherit; 
    flex-direction: inherit; 
    align-items: inherit;
    background-color: ${THEME.fluent.SECOND_BACKGROUND_COLOR as string};

    .user-card {
        margin-top: 12px;
    }
`

const Feed: React.FC<ISidebarFeedProps> = props => {

    const users = props.users.map(
        u => <UserCard
            isVideoEnabled={u.isVideoEnabled}
            isMicroEnabled={u.isMicroEnabled}
            name={u.name}
            photoURL={u.photoURL}
            status={u.status}
            role={u.role}
        />
    )

    return (
        <Wrapper>
            {users}
        </Wrapper>
    )
}

export default Feed