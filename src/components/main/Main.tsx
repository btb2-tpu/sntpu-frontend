import React from 'react'
import styled from 'styled-components'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import SideMenu from './SideMenu'
import News from './News'
import MyAccount from "./MyAccount";


const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 25px;
  background: #F0F2F5;
`

const ContentContainer = styled.div`
  width: 85%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
`

const Main: React.FC = () => {
    return (
            <Container>
                <ContentContainer>
                    <SideMenu/>
                    <Routes>
                        <Route path="/" element={<News/>}/>
                        <Route path="myAccount" element={<MyAccount/>}/>
                    </Routes>
                </ContentContainer>
            </Container>
    )
}

export default Main
