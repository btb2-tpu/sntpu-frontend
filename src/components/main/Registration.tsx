import React, {ChangeEvent, FormEvent, useState} from 'react'
import styled from 'styled-components'
import {Navigate, useNavigate} from 'react-router-dom'
import {TextField} from '@mui/material'

import {instance, isAuthenticated, setAuthToken} from '../auth/authModule'


const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-top: 25px;
  background: #F0F2F5;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Form = styled.div`
  height: 400px;
  width: 600px;
  background-color: #fafafa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LoginButton = styled.input`
  display: flex;
  height: 25px;
  border: 1px solid #6FA53B;
  align-items: center;
  justify-content: center;
  background: white;
  margin-top: 20px;

  span {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

export const RegistrationPage: React.FC = () => {
    const navigate = useNavigate()
    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")

    const isAuth = isAuthenticated()

    const handleChangeUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value)
    }

    const onSubmit = (event: FormEvent<HTMLInputElement>) => {
        instance.post("/auth/register", {
            "username": username,
            "password": password
        }).then( response => {
                if (response.status == 200) {
                    const token = response.data["token"]
                    setAuthToken(token)
                    navigate("/")
                } else {
                    console.log("Error with register and auth")
                }
            }
        )
        event.preventDefault()
    }

    if (isAuth) {
        return <Navigate to={"/"} replace />
    }

    return(
        <Container>
            <Form>
                Регистрация
                <label>
                    <TextField variant='standard' label='Логин' type={"text"} value={username} onChange={handleChangeUsername}/>
                </label>
                <label>
                    <TextField variant='standard' label='Пароль' type={"text"} value={password} onChange={handleChangePassword}/>
                </label>
                <LoginButton type={"submit"} onClick={onSubmit}/>
            </Form>
        </Container>
    )
}
