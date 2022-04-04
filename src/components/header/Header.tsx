import React, {useState} from 'react'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

import bell from '../../img/bell.svg'
import profile from '../../img/profile.svg'
import settings from '../../img/settings.svg'
import {clearAndLogout} from "../auth/authModule";


const HeaderComponent = styled.div`
  width: 100%;
  height: 70px;
  background: #C4C4C4;
  display: flex;
  justify-content: flex-end;
`

const IconsContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-right: 42px;
  position: relative;
  
  img {
    margin-right: 24px;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.2, 1.2);
      transition: 0.2s ease-out;
    }
  }
`

const SettingsPressed = styled.div<{isOpen: boolean}>`
  display: ${props => props.isOpen ? 'flex' : 'none'};
  width: 100px;
  height: 30px;
  border-radius: 12px;
  position: absolute;
  top: 50px;
  right: 40px;
  align-items: center;
  justify-content: center;
  background: white;
  
  span {
    font-family: Roboto300, serif;
    font-size: 14px;
    color: #7B809A;
    
    &:hover {
      cursor: pointer;
    }
  }
`

const Header: React.FC = () => {
    const navigate = useNavigate()
    const [isSettingsOpen, setIsSettingsOpen] = useState(false)

    return (
        <HeaderComponent>
            <IconsContainer>
                <SettingsPressed isOpen={isSettingsOpen}>
                    <span onClick={() => {
                        clearAndLogout()
                    }}>Выйти</span>
                </SettingsPressed>
                <img src={profile}
                     onClick={() => {
                         navigate('/myAccount')
                     }}/>
                <img src={settings} onClick={() => {
                    setIsSettingsOpen(!isSettingsOpen)
                }}/>
                <img src={bell}/>
            </IconsContainer>
        </HeaderComponent>
    )
}

export default Header
