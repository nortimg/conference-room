import React from 'react'
import styled from 'styled-components'
import Chat from './components/Chat/Chat'
import { ITabProps } from './components/Tabs/Tab'
import { IUserCardProps } from './components/Sidebar/UserCard/UserCard'
import Sidebar from './components/Sidebar/Sidebar'

const messages = [
  {
    author: 'Vasya',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.`,
    date: '6.25.2020',
    time: '2:35',
    fromMe: false,
    photoURL: 'https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg'
  },
  {
    author: 'Nikita',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.`,
    date: '6.26.2020',
    time: '4:35',
    fromMe: true,
    photoURL: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg'
  },
  {
    author: 'Nikita',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.`,
    date: '6.26.2020',
    time: '4:35',
    fromMe: false,
    photoURL: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg'
  },
  {
    author: 'Nikita',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.`,
    date: '6.26.2020',
    time: '4:35',
    fromMe: true,
    photoURL: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg'
  },
  {
    author: 'Nikita',
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.`,
    date: '6.26.2020',
    time: '4:35',
    fromMe: false,
    photoURL: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg'
  }
]

const tabs: ITabProps[] = [
  {
    title: 'RoomName',
    active: true
  },
  {
    title: 'All',
    active: false
  }
]

const users: IUserCardProps[] = [
  {
    isMicroEnabled: true,
    isVideoEnabled: true,
    photoURL: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
    name: 'Ivan',
    role: 'student',
    status: 'online'
  },
  {
    isMicroEnabled: false,
    isVideoEnabled: false,
    photoURL: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
    name: 'Ivan',
    role: 'student',
    status: 'online'
  }, 
  {
    isMicroEnabled: false,
    isVideoEnabled: false,
    photoURL: 'https://www.shareicon.net/data/512x512/2016/05/29/772559_user_512x512.png',
    name: 'Ivan',
    role: 'student',
    status: 'do_not_disturb'
  }
]


const Container = styled.div`
  display: flex; 
  justify-content: space-between; 
  height: 100%; 
`

const App: React.FC = () => {

  return (
    <Container>
      <Sidebar
        users={users}
      />
      <Chat
        messages={messages}
        tabs={tabs}
      />
    </Container>
  )
}

export default App;
