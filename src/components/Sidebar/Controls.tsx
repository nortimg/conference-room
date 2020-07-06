import React from 'react'
import styled from 'styled-components'

import { ReactComponent as VideoSVG } from 'assets/images/controls/video.svg'
import { ReactComponent as AdjustVideosSVG } from 'assets/images/controls/adjust_videos.svg'
import { ReactComponent as MicrophoneSVG } from 'assets/images/controls/microphone.svg'
import { ReactComponent as ShareScreenSVG } from 'assets/images/controls/share_screen.svg'
import { ReactComponent as ShareLinkSVG } from 'assets/images/controls/share_link.svg'
import THEME from 'theme'

interface ISidebarControlsProps { }

const Wrapper = styled.div`
    display: flex; 
    justify-content: space-between; 
    align-items: center;
    width: 100%; 
    padding: 13.5px; 
    background-color: ${THEME.fluent.SECOND_BACKGROUND_COLOR as string}; 
    border-bottom: 2px solid ${THEME.fluent.LIGHT_GREY as string}; 
`

const Control = styled.button`
    background-color: transparent; 
    display: flex; 
    justify-content: center; 
    align-items: center;
    border: 0; 
    outline: 0; 
    cursor: pointer; 
`

const Controls: React.FC<ISidebarControlsProps> = props => {


    return (
        <Wrapper>
            <Control>
                <VideoSVG /> 
            </Control>
            <Control>
                <MicrophoneSVG /> 
            </Control>
            <Control>
                <ShareScreenSVG /> 
            </Control>
            <Control>
                <ShareLinkSVG /> 
            </Control>
            <Control>
                <AdjustVideosSVG /> 
            </Control>
        </Wrapper>
    )
}

export default Controls