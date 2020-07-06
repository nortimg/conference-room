import React from 'react'
import styled from 'styled-components'

import { ReactComponent as UsersSVG } from 'assets/images/tabs/users.svg'
import { ReactComponent as FileSVG } from 'assets/images/tabs/files.svg'
import { ReactComponent as ChartSVG } from 'assets/images/tabs/chart.svg'
import { ReactComponent as ExpandSVG } from 'assets/images/expand_sidebar.svg'

import THEME from 'theme'
import Bar from '../Tabs/Bar'
import { ITabProps } from 'components/Tabs/Tab'
import ExpandBarButton from 'components/Tabs/ExpandBarButton'


interface ISidebarTabBarProps { }

const tabs: ITabProps[] = [
    { title: <UsersSVG />, active: true },
    { title: <FileSVG />, active: false },
    { title: <ChartSVG />, active: false },
]

const Wrapper = styled.div`
    display: flex; 
    align-items: center;
    width: 100%; 
    background-color: ${THEME.fluent.PEACH as string};
    padding: 0 9px;

    ${ExpandBarButton} {
        margin-right: 16px;
        margin-top: 6px;
    }
`

const SidebarTabBar: React.FC<ISidebarTabBarProps> = props => {


    return (
        <Wrapper>
            <ExpandBarButton>
                <ExpandSVG /> 
            </ExpandBarButton>
            <Bar
                tabs={tabs}
                backgroundColor={THEME.fluent.PEACH as string}
            />
        </Wrapper>
    )
}

export default SidebarTabBar