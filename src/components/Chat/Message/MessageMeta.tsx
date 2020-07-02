import React from 'react'
import styled from 'styled-components'


const Avatar = styled.img`
    width: 36px; 
    height: 36px; 
    border-radius: 50%; 
    object-fit: cover;
`

const Meta = styled.div`
    &:not(.meta_my) {
        margin-left: 4px; 
        width: 100%; 
        display: flex; 
        justify-content: center; 
        flex-direction: column;
    }

    h4, p {
        margin: 0; 
    }

    h4 {
        font-size: 13px; 
    }

    p {
        color: #70819A; 
        font-size: 12px; 
    }

    .meta_my {
        text-align: right; 
        padding: 7px 0; 

    }
`

const Container = styled.div`
    display: flex;
    max-width: 210px; 
    width: 100%; 
`

interface IMessageMetaProps {
    fromMe: boolean
    date: string
    time: string
    author: string
    photoURL: string
}

const MessageMeta: React.FC<IMessageMetaProps> = (props) => {

    if (props.fromMe) {
        return (
            <Container>
                <Meta>
                    <p className="meta_my">
                        <span>{props.date}</span>
                        &nbsp;•&nbsp;
                        <span>{props.time}</span>PM
                    </p>
                </Meta>
            </Container>
        )
    }

    else {
        return (
            <Container>
                <Avatar
                    src={props.photoURL}
                    alt={props.author}
                />
                <Meta>
                    <h4>{props.author}</h4>
                    <p><span>{props.date}</span> • <span>{props.time}</span>PM</p>
                </Meta>
            </Container>
        )
    }
}



export default MessageMeta