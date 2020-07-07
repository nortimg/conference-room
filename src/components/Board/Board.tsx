import React from 'react'
import styled from 'styled-components'


import TabBar from './BoardTabBar'
import Controls from './BoardControls'
import Area from './Area'
import { ITabProps } from 'components/Tabs/Tab'

interface IBoardProps {
    tabs: ITabProps[]
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column; 
    width: 100%; 
`

const Board: React.FC<IBoardProps> = props => {


    return (
        <Wrapper>
            <TabBar
                tabs={props.tabs}
            />
            <Controls /> 
            <Area /> 
        </Wrapper>
    )
}

export default Board