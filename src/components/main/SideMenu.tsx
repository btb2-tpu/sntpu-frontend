import React, {useEffect} from 'react'
import styled from 'styled-components'

import dashboard from '../../img/dashboard.svg'
import chat from '../../img/chat.svg'
import {useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import avatar from "../../img/avatar.png";
import {apiBaseUrl} from "../auth/authModule";
import {userState} from "../../model/State";


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
    const [user, setUser] = useRecoilState(userState)

    const getAvatar = () => {
        if (user.avatarUUID === null) {
            return avatar
        } else return `${apiBaseUrl}/upload/${user.avatarUUID}`
    }

    return (
        <Container>
            <LogoContainer>
                SOB
            </LogoContainer>
            <DividingLine/>
            <ProfileContainer>
                <img src={getAvatar()}/>
                <span>{`${user.lastName} ${user.firstName}`}</span>
            </ProfileContainer>
            <DividingLine/>
            <SchemaNewsContainer>
                <SchemaNewsInstance isNews={true}
                                    onClick={() => {
                                        navigate('/')
                                    }}
                >
                    <img src={dashboard}/>
                    <span>??????????????</span>
                </SchemaNewsInstance>
                <SchemaNewsInstance isNews={false} onClick={() => { navigate("/scene") }}>
                    <span>????</span>
                    <span>?????????? ??????????????</span>
                </SchemaNewsInstance>
            </SchemaNewsContainer>
            <ChatsContainer>
                <span>????????</span>
                <ChatsList>
                    <Chat>
                        <img src={chat}/>
                        <span>?????? 1</span>
                    </Chat>
                    <Chat>
                        <img src={chat}/>
                        <span>?????? 2</span>
                    </Chat>
                    <Chat>
                        <img src={chat}/>
                        <span>?????? 3</span>
                    </Chat>
                </ChatsList>
            </ChatsContainer>
        </Container>
    )
}

export default SideMenu
