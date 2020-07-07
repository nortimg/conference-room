import React from 'react'
import styled from 'styled-components'

import THEME from 'theme'
import Bar from 'components/Tabs/Bar'
import { ITabProps } from 'components/Tabs/Tab'
import { ReactComponent as RightArrowSVG } from 'assets/images/arrow_right.svg'
import { ReactComponent as LeftArrowSVG } from 'assets/images/arrow_left.svg'
import { ReactComponent as PlusSVG } from 'assets/images/plus.svg'


interface IBoardTabBarProps {
    tabs: ITabProps[]
}

const TabBar = styled.div`
    width: auto; 
    background: blue;
`

const Wrapper = styled.div`
    display: flex; 
    align-items: flex-end;
    width: 100%; 
    background-color: ${THEME.fluent.LIGHT_PEACH as string}; 

`

const Button = styled.button`
    display: flex; 
    justify-content: center; 
    align-items: center; 
    width: 40px; 
    height: 30px;
    background-color: transparent; 
    border: 0; 
    outline: 0; 
    cursor: pointer;
`

const ArrowButton = styled(Button)`
    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-left: auto; 
        margin-right: 0; 
    }
`

const BoardTabBar: React.FC<IBoardTabBarProps> = props => {


    return (
        <Wrapper>
            <ArrowButton>
                <LeftArrowSVG />
            </ArrowButton>
            <TabBar>
                <Bar
                    tabs={props.tabs}
                    backgroundColor={THEME.fluent.LIGHT_PEACH as string}
                />
            </TabBar>
            <Button>
                <PlusSVG />
            </Button>
            <ArrowButton>
                <RightArrowSVG />
            </ArrowButton>
        </Wrapper>
    )
}

export default BoardTabBar