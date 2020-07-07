import React from 'react'
import styled from 'styled-components'

import THEME from 'theme'
import Control from 'components/Control'
import { ReactComponent as CursorSVG } from 'assets/images/controls/cursor.svg'
import { ReactComponent as BrushSVG } from 'assets/images/controls/brush.svg'
import { ReactComponent as TextSVG } from 'assets/images/controls/text.svg'
import { ReactComponent as PictureSVG } from 'assets/images/controls/picture.svg'
import { ReactComponent as FormulaSVG } from 'assets/images/controls/formula.svg'
import { ReactComponent as TargetSVG } from 'assets/images/controls/target.svg'
import { ReactComponent as EyeSVG } from 'assets/images/controls/eye.svg'
import { ReactComponent as ForwardSVG } from 'assets/images/controls/forward.svg'
import { ReactComponent as ExportSVG } from 'assets/images/controls/export.svg'
import { ReactComponent as DeleteLineSVG } from 'assets/images/controls/delete_line.svg'
import { ReactComponent as SettingsSVG } from 'assets/images/controls/settings.svg'


interface IBoardControlsProps { }

const BoardControl = styled(Control)`
    width: 48px; 
    height: 100%;
`

const Wrapper = styled.div`
    display: flex; 
    height: 48px; 

    border-bottom: 2px solid ${THEME.fluent.LIGHT_GREY as string};


    ${BoardControl} {
        &:nth-child(8) {
            margin-left: auto; 
            margin-right: 0; 
        }

        &:last-child {
            margin-left: 52.5px;
        }
    }
`

const BoardControls: React.FC<IBoardControlsProps> = props => {

    return (
        <Wrapper>
            <BoardControl>
                <CursorSVG /> 
            </BoardControl>
            <BoardControl>
                <BrushSVG /> 
            </BoardControl>
            <BoardControl>
                <TextSVG /> 
            </BoardControl>
            <BoardControl>
                <PictureSVG /> 
            </BoardControl>
            <BoardControl>
                <FormulaSVG /> 
            </BoardControl>
            <BoardControl>
                <TargetSVG /> 
            </BoardControl>
            <BoardControl>
                <EyeSVG /> 
            </BoardControl>
            <BoardControl>
                <ForwardSVG /> 
            </BoardControl>
            <BoardControl>
                <ExportSVG /> 
            </BoardControl>
            <BoardControl>
                <DeleteLineSVG /> 
            </BoardControl>
            <BoardControl>
                <SettingsSVG /> 
            </BoardControl>
        </Wrapper>
    )
}

export default BoardControls