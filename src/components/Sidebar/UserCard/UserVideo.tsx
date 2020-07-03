import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'

interface IUserVideo {
    isEnabled: boolean
}

const Wrapper = styled.div`  
    width: 100%; 
    height: 100%; 
    border-radius: inherit;
`

const Video = styled.video`
    display: block; 
    width: 100%; 
    height: 100%; 
    object-fit: cover;
    border-radius: inherit;
`

const UserVideo: React.FC<IUserVideo> = props => {
    const videoEl = useRef<HTMLVideoElement>(null)
    const [isEnabled, setisEnabled] = useState(props.isEnabled)

    useEffect(() => {
        if (navigator.mediaDevices.getUserMedia && isEnabled) {
            navigator.mediaDevices.getUserMedia({video: true})
                .then(stream => {
                    if (videoEl.current) {
                        videoEl.current.srcObject = stream
                    }
                })
        }
    }, [props.isEnabled])

    return (
        <Wrapper>
            <Video 
                ref={videoEl}
                autoPlay={true}
            >
            </Video>
        </Wrapper>
    )
}

export default UserVideo