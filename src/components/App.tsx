import React from 'react'
import styled from 'styled-components'

import Header from './header/Header'
import Main from './main/Main'
import {RecoilRoot} from "recoil";


const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`


const App: React.FC = () => {
    return (
        <RecoilRoot>
            <Container>
                <Header/>
                <Main/>
            </Container>
        </RecoilRoot>
    )
}

export default App;
