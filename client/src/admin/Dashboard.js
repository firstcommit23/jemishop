/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { Link, Route, Switch } from 'react-router-dom';

import Order from './Order.js';
import Items from './Items.js';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

let pd30 = styled.div`
  padding-left:20px;
`;

let H4Title = styled.h4`
  font-size:25px;
  color : ${props => props.색상}
`;

function Dashboard({ match }) {

    let history = useHistory();

    return (
        <div>
            현재 로그인 아이디 : jemi22 (테스트 입니다.)

            <SideNav
                onSelect={(selected) => {
                    let to;
                    if (selected == 'dashboard') {
                        to = '/admin';
                    } else {
                        to = '/admin/' + selected;
                    }
                    history.push(to);
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            대쉬보드
            </NavText>
                    </NavItem>
                    <NavItem eventKey="order">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            주문관리
            </NavText>
                    </NavItem>
                    <NavItem eventKey="item">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            상품관리
            </NavText>
                    </NavItem>
                    <NavItem eventKey="category">
                        <NavIcon>
                            <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            카테고리관리
            </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>

            <Route path={`${match.path}/order`} >
                <Order />
            </Route>
            <Route path={`${match.path}/item`} >
                <Items />
            </Route>
        </div>
    )
}

export default Dashboard;