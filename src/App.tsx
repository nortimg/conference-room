import React from 'react';
import Chat from './components/Chat/Chat'

const messages = [
  {
    id: 1, 
    author: 'Vasya', 
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.`, 
    date: '6.25.2020', 
    time: '2:35PM', 
    fromMe: false, 
    photoURL: 'https://i.ytimg.com/vi/7PXLPzcIydw/maxresdefault.jpg'
  }, 
  {
    id: 2, 
    author: 'Nikita', 
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas venenatis fermentum ipsum, vel lobortis enim blandit sed.`, 
    date: '6.26.2020', 
    time: '4:35PM', 
    fromMe: false, 
    photoURL: 'https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg'
  }
]

const App: React.FC = () => {

  return (
    <Chat 
      messages={messages}
    />
  );
}

export default App;
