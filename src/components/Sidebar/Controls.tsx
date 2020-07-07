import React from 'react'
import styled from 'styled-components'

import { ReactComponent as VideoSVG } from 'assets/images/controls/video.svg'
import { ReactComponent as AdjustVideosSVG } from 'assets/images/controls/adjust_videos.svg'
import { ReactComponent as MicrophoneSVG } from 'assets/images/controls/microphone.svg'
import { ReactComponent as ShareScreenSVG } from 'assets/images/controls/share_screen.svg'
import { ReactComponent as ShareLinkSVG } from 'assets/images/controls/share_link.svg'
import THEME from 'theme'
import Control from 'components/Control'

interface ISidebarControlsProps { }

const Wrapper = styled.div`
    display: flex; 
    height: 48px;
    justify-content: space-between; 
    align-items: center;
    align-content: center; 
    width: 100%; 
    background-color: ${THEME.fluent.SECOND_BACKGROUND_COLOR as string}; 
    border-bottom: 2px solid ${THEME.fluent.LIGHT_GREY as string}; 
`

const SidebarControl = styled(Control)`
    width: 48px;
    height: 100%;
`

const Controls: React.FC<ISidebarControlsProps> = props => {


    return (
        <Wrapper>
            <SidebarControl>
                <VideoSVG /> 
            </SidebarControl>
            <SidebarControl>
                <MicrophoneSVG /> 
            </SidebarControl>
            <SidebarControl>
                <ShareScreenSVG /> 
            </SidebarControl>
            <SidebarControl>
                <ShareLinkSVG /> 
            </SidebarControl>
            <SidebarControl>
                <AdjustVideosSVG /> 
            </SidebarControl>
        </Wrapper>
    )
}

export default Controls