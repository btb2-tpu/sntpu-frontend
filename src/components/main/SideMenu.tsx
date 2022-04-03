import React from 'react'
import styled from 'styled-components'

import catImg from '../../img/catImg.jpg'
import dashboard from '../../img/dashboard.svg'
import chat from '../../img/chat.svg'
import {useNavigate} from "react-router-dom";


const Container = styled.div`
  max-width: 250px;
  max-height: 1048px;
  width: 30%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #3E3D45 0%, #202020 100%);
  box-sizing: border-box;
  padding: 16px;
  border-radius: 12px;
`

const DividingLine = styled.div`
  height: 1px;
  width:100%;
  background: white;
`

const LogoContainer = styled.div`
  height: 46px;
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: Roboto500, serif;
  color: white;
  font-size: 14px;
`

const ProfileContainer = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 15px;
  
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  } 
  
  span {
    font-family: Roboto300, serif;
    color: white;
    font-size: 14px;
    margin-left: 10px;
  }
`

const SchemaNewsContainer = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const SchemaNewsInstance = styled.div<{isNews: boolean}>`
  width: 100%;
  height: 48px;
  background: ${props => props.isNews ? '#4F4F52' : '#6FA53B'};
  border-radius: 4px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-left: 21px;
  color: white;
  font-family: Roboto300, serif;
  
  span {
    margin-left: 20px;
    
    &:first-child {
      margin-left: 0;
      width: 16px;
    }
  }

  &:first-child {
    margin-bottom: 4px;
  }
  
  &:hover {
    cursor: pointer;
  }
`

const ChatsContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  
  span {
    color: white;
    font-family: Roboto500, serif;
    font-size: 12px;
  }
`

const ChatsList = styled.div`
  width: 100%;
  height: 152px;
  display: flex;
  flex-direction: column;
`

const Chat = styled.div`
  width: 100%;
  height: 33%;
  box-sizing: border-box;
  padding-left: 22px;
  display: flex;
  align-items: center;
  
  span {
    color: white;
    font-family: Roboto300, serif;
    margin-left: 20px;
  }
`

const SideMenu: React.FC = () => {
    const navigate = useNavigate()

    return (
        <Container>
            <LogoContainer>
                SOB
            </LogoContainer>
            <DividingLine/>
            <ProfileContainer>
                <img src={catImg}/>
                <span>Иванов Иван</span>
            </ProfileContainer>
            <DividingLine/>
            <SchemaNewsContainer>
                <SchemaNewsInstance isNews={true}
                                    onClick={() => {
                                        navigate('/')
                                    }}
                >
                    <img src={dashboard}/>
                    <span>Новости</span>
                </SchemaNewsInstance>
                <SchemaNewsInstance isNews={false}>
                    <span>СК</span>
                    <span>Схема Кампуса</span>
                </SchemaNewsInstance>
            </SchemaNewsContainer>
            <ChatsContainer>
                <span>ЧАТЫ</span>
                <ChatsList>
                    <Chat>
                        <img src={chat}/>
                        <span>Чат 1</span>
                    </Chat>
                    <Chat>
                        <img src={chat}/>
                        <span>Чат 2</span>
                    </Chat>
                    <Chat>
                        <img src={chat}/>
                        <span>Чат 3</span>
                    </Chat>
                </ChatsList>
            </ChatsContainer>
        </Container>
    )
}

export default SideMenu
