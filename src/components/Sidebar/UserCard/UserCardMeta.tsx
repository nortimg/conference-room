import React from 'react'
import styled from 'styled-components'

import THEME from 'theme'
import { ReactComponent as VideoDisabledSVG } from 'assets/images/video_disabled.svg'
import { ReactComponent as MicrophoneDisabledSVG } from 'assets/images/microphone_disabled.svg'
import { ReactComponent as RightArrowSVG } from 'assets/images/right_arrow.svg'

interface IUserCardMeta {
    name: string
    role: string
    isMicroEnabled: boolean
    isVideoEnabled: boolean
    profileLink: string
    photoURL: string
    status: string
}

const Wrapper = styled.div`
    display: flex; 
    width: 100%; 
    height: 48px; 
    background-color: inherit; 
    transform: translateY(-100%); 
    opacity: .85;
    padding: 8px 20px 7px 6px;  
    border-radius: 0 0 8px 8px; 

    button {
        outline: 0; 
        border: 0; 
        background-color: transparent;
        cursor: pointer;
    }
`

const avatarHeight = '36px'
const Avatar = styled.div`
    position: relative;
    min-width: ${avatarHeight}; 
    max-width: ${avatarHeight};
    min-height: ${avatarHeight}; 
    max-height: ${avatarHeight}; 
    height: ${avatarHeight};
    img {
        width: 100%; 
        height: 100%; 
        border-radius: 50%;  
        object-fit: cover; 
    }

    &::after {
        content: ''; 
        display: block; 
        width: 10px; 
        height: 10px;
        position: absolute;
        right: 0;
        bottom: 0;  
        border-radius: 50%;
        background-color: ${
    (p: { status: string }) => {
        const status = p.status.replace(' ', '_');
        return THEME.fluent.status[status];
    }
    };
        border: 1px solid black; 
    }
`

const Controls = styled.div`
    display: flex; 
    justify-content: space-between;
    max-width: 62px; 
    width: 100%; 
`

const Data = styled.div`
    max-width: 135px; 
    width: 100%; 
    margin-left: 5px; 
    h4 {
        font-size: 13px; 
    }
    
    ${Controls} {
        margin-top: 6px; 
        button, i {
            display: flex; 
            justify-content: center; 
            align-items: center;
            max-width: 14px;
            max-height: 14px;
        }
    }
`

const ArrowButton = styled.button`
    display: inline-block;
    width: 13.33px; 
    height: 13.33px;
    margin-top: auto; 
    margin-bottom: 0; 
`

const UserCardMeta: React.FC<IUserCardMeta> = props => {
    const roleSVG = require('assets/images/roles/' + props.role + '.svg')

    return (
        <Wrapper>
            <Avatar
                status={props.status}
            >
                <img src={props.photoURL} alt={`${props.name} is ${props.status}`} />
            </Avatar>
            <Data>
                <h4>{props.name}</h4>
                <Controls>
                    <i>
                        <img src={roleSVG} alt={props.role} />
                    </i>
                    {
                        !props.isMicroEnabled &&
                        <button>
                            <MicrophoneDisabledSVG />
                        </button>
                    }
                    {
                        !props.isVideoEnabled &&
                        <button>
                            <VideoDisabledSVG />
                        </button>
                    }
                </Controls>
            </Data>
            <ArrowButton>
                <RightArrowSVG />
            </ArrowButton>
        </Wrapper>
    )
}

export default UserCardMeta