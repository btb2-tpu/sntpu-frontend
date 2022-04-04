import React from 'react'
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
  
  img {
    margin-right: 24px;
    
    &:hover {
      cursor: pointer;
      transform: scale(1.2, 1.2);
      transition: 0.2s ease-out;
    }
  }
`

const Header: React.FC = () => {
    const navigate = useNavigate()

    return (
        <HeaderComponent>
            <IconsContainer>
                <img src={profile}
                     onClick={() => {
                         navigate('/myAccount')
                     }}/>
                <img src={settings} onClick={() => {
                    clearAndLogout()
                }}/>
                <img src={bell}/>
            </IconsContainer>
        </HeaderComponent>
    )
}

export default Header
