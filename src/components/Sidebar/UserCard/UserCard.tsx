import React from 'react'
import styled from 'styled-components'

import UserVideo from './UserVideo'
import Meta from './UserCardMeta'
import THEME from 'theme'

export interface IUserCardProps {
    name: string
    role: string
    isMicroEnabled: boolean
    isVideoEnabled: boolean
    profileLink: string
    photoURL: string
    status: string
}


const Wrapper = styled.div`
    max-width: 210px; 
    max-height: 144px;
    width: 100%; 
    height: 100%; 
    border-radius: 8px;
    background-color: ${THEME.fluent.LIGHT_GREY as string}; 
`


const UserCard: React.FC<IUserCardProps> = props => {


    return (
        <Wrapper>
            <UserVideo 
                isEnabled={props.isVideoEnabled}
            /> 
            <Meta
                isVideoEnabled={props.isVideoEnabled}
                isMicroEnabled={props.isMicroEnabled}
                profileLink={props.profileLink}
                photoURL={props.photoURL}
                status={props.status}
                role={props.role}
                name={props.name}
            /> 
        </Wrapper>
    )
}


export default UserCard