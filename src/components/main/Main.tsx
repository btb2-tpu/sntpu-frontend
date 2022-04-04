import React, {useEffect} from 'react'
import styled from 'styled-components'
import {Route, Routes} from 'react-router-dom'

import News from './News'
import {LoginPage} from "./Login";
import {PrivateRoute} from "../auth/PrivateRoute";
import {RegistrationPage} from "./Registration";
import {useRecoilState} from "recoil";
import {instance} from "../auth/authModule";
import MyAccount from "./MyAccount";
import {userState} from "../../model/State";


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

    const [user, setUserState] = useRecoilState(userState)

    useEffect(() => {
        instance.get('/user')
            .then((response) => {
                setUserState(response.data)
            })
    }, [])

    return (
        <Container>
            <ContentContainer>
                <Routes>
                    <Route path="/login" element={<LoginPage/>} />
                    <Route path="/register" element={<RegistrationPage/>} />
                    <Route
                        path="/"
                        element={<PrivateRoute component={News}/>}
                    />
                    <Route
                        path="myAccount"
                        element={<PrivateRoute component={MyAccount}/>}
                    />
                </Routes>
            </ContentContainer>
        </Container>
    )
}

export default Main
