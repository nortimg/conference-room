import React from 'react'
import UserCard, { IUserCardProps } from './UserCard/UserCard'

interface ISidebarProps {
    users: IUserCardProps[]
}

const Sidebar: React.FC<ISidebarProps> = props => {
    // logic about users videos

    return (
        <UserCard 
            isVideoEnabled={true}
            isMicroEnabled={false}
            name={'Alexey'}
            profileLink={'https://vk.com/nortimg'}
            photoURL={'https://memepedia.ru/wp-content/uploads/2020/03/soft-girl-6-768x662.png'}
            status={'online'}
            role={'student'}
        />
    )
}

export default Sidebar