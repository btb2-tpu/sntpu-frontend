import React from 'react'
import styled from 'styled-components'

import Header from './header/Header'
import Main from './main/Main'


const Container = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
`


const App: React.FC = () => {
    return (
        <Container>
            <Header/>
            <Main/>
        </Container>
    )
}

export default App;
