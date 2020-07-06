import React from 'react'
import styled from 'styled-components'

import { ReactComponent as UsersSVG } from 'assets/images/tabs/users.svg'
import { ReactComponent as FileSVG } from 'assets/images/tabs/files.svg'
import { ReactComponent as ChartSVG } from 'assets/images/tabs/chart.svg'

import THEME from 'theme'
import Bar from '../Tabs/Bar'
import { ITabProps } from 'components/Tabs/Tab'


interface ISidebarTabBarProps { }

const tabs: ITabProps[] = [
    { title: <UsersSVG />, active: true },
    { title: <FileSVG />, active: false },
    { title: <ChartSVG />, active: false },
]

const Wrapper = styled.div`
    width: 100%; 
`

const TabBar = styled(Bar)`
    display: flex; 
    
`

const SidebarTabBar: React.FC<ISidebarTabBarProps> = props => {


    return (
        <Wrapper>
            <TabBar 
                tabs={tabs} 
                backgroundColor={THEME.fluent.PEACH as string} 
            />
        </Wrapper>
    )
}

export default SidebarTabBar