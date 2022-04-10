import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Switch from '@mui/material/Switch'

import myAccPic from '../../img/myAccPic.png'
import avatar from '../../img/avatar.png'
import editImg from '../../img/editImg.svg'
import SideMenu from './SideMenu'
import EditProfile from './EditProfile'
import {apiBaseUrl, instance} from "../auth/authModule";
import {useRecoilState} from "recoil";
import {userState} from "../../model/State";

const Container = styled.div`
  width: 1010px;
  height: 100%;
  margin-left: 41px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const PictureContainer = styled.img`
  position: absolute;
`

const PictureWrapper = styled.div`
  width: 100%;
  height: 300px;
  background: #27AE60;
  opacity: 0.1;
  z-index: 2;
  border-radius: 12px;
`

const MainContainer = styled.div`
  width: 985px;
  box-sizing: border-box;
  padding-bottom: 80px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  margin-top: 190px;
  margin-left: 24px;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
`

const InfoOptionsContainer = styled.div`
  display: flex;
  margin-top: 51px;
`

const NameContainer = styled.div`
  width: 300px;
  height: 76px;
  display: flex;
  margin-left: 16px;
  margin-top: 16px;
`

const Avatar = styled.img`
  height: 74px;
  border-radius: 8px;
`

const NameDegreeContainer = styled.div`
  width: 200px;
  height: 76px;
  display: flex;
  flex-direction: column;
  margin-left: 24px;

  span {
    font-family: Roboto300, serif;
    font-size: 14px;

    &:first-child {
      font-family: Roboto500, serif;
      font-size: 20px;
      margin-bottom: 4px;
    }
  }
`

const InfoContainer = styled.div`
  display: flex;
  padding-left: 43px;
  box-sizing: border-box;
`

const ProfileInfoContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const ProfileInfoText = styled.span`
  font-family: Roboto500, serif;
  font-size: 16px;
`

const BoldText = styled.span`
  font-family: Roboto500, serif;
  font-size: 14px;
`

const RegularText = styled.span`
  font-family: Roboto300, serif;
  font-size: 14px;
  color: #7B809A;
`

const TextContainer = styled.div`
  &:not(:first-child) {
    margin-top: 15px;
  }
`

const EditProfilePic = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  &:hover {
    cursor: pointer;
  }
`

const GeneralOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 110px;

  span {
    font-family: Roboto500, serif;
    font-size: 16px;
    color: #344767;
  }
`

const OptionsSections = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  span {
    font-family: Roboto500, serif;
    font-size: 12px;
    color: #7B809A;
  }
`

const OptionSection = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;

  span {
    font-family: Roboto300, serif;
    font-size: 14px;
    color: #7B809A;
  }
`


const MyAccount: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false)
    const [user, setUser] = useRecoilState(userState)

    useEffect(() => {
        instance.get('/user')
            .then((response) => {
                setUser(response.data)
            })
    }, [])

    const handleOpen = () => {
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }

    const getAvatar = () => {
        if (user.avatarUUID === null) {
            return avatar
        } else return `${apiBaseUrl}/upload/${user.avatarUUID}`
    }

    if (user.description === undefined) {
        return (
            <div>
                Загрузка, ждите
            </div>
        )
    } else

   return (
        <>
            <SideMenu/>
            <Container>
                <PictureWrapper/>
                <PictureContainer src={myAccPic}/>
                <MainContainer>
                    <NameContainer>
                        <Avatar src={getAvatar()}/>
                        <NameDegreeContainer>
                            <span>{user.lastName + ' ' + user.firstName}</span>
                            <span>{user.education}</span>
                        </NameDegreeContainer>
                    </NameContainer>
                    <InfoOptionsContainer>
                        <InfoContainer>
                            <ProfileInfoContainer>
                                <ProfileInfoText>Информация профиля</ProfileInfoText>
                                <EditProfilePic src={editImg}
                                                onClick={() => {
                                                    handleOpen()
                                                }}
                                />
                                <TextContainer>
                                    <RegularText>{user.description === null ? 'Информация о себе' : user.description}</RegularText>
                                </TextContainer>
                                <TextContainer>
                                    <BoldText>ФИО: </BoldText>
                                    <RegularText>{user.lastName + ' ' + user.firstName + ' ' + user.middleName}</RegularText>
                                </TextContainer>
                                <TextContainer>
                                    <BoldText>Школа: </BoldText>
                                    <RegularText>{user.school}</RegularText>
                                </TextContainer>
                                <TextContainer>
                                    <BoldText>Группа: </BoldText>
                                    <RegularText>{user.group}</RegularText>
                                </TextContainer>
                                <TextContainer>
                                    <BoldText>Общежитие: </BoldText>
                                    <RegularText>{user.dormitory}</RegularText>
                                </TextContainer>
                                <TextContainer>
                                    <BoldText>Этаж: </BoldText>
                                    <RegularText>{user.floor}</RegularText>
                                </TextContainer>
                                <TextContainer>
                                    <BoldText>Комната: </BoldText>
                                    <RegularText>{user.room}</RegularText>
                                </TextContainer>
                            </ProfileInfoContainer>
                        </InfoContainer>
                        <GeneralOptions>
                            <span>Общие настройки</span>
                            <OptionsSections>
                                <span>Аккаунт</span>
                                <OptionSection>
                                    <Switch size="small" defaultChecked/>
                                    <span>Получать письмо, если кто-то отмечает меня в чате</span>
                                </OptionSection>
                                <OptionSection>
                                    <Switch size="small" defaultChecked/>
                                    <span>Получать письмо о новостях моего общежития</span>
                                </OptionSection>
                            </OptionsSections>
                            <OptionsSections>
                                <span>Приложение</span>
                                <OptionSection>
                                    <Switch size="small" defaultChecked/>
                                    <span>Не выходить из профиля</span>
                                </OptionSection>
                                <OptionSection>
                                    <Switch size="small" defaultChecked/>
                                    <span>Уведомлять о сообщениях в браузере</span>
                                </OptionSection>
                            </OptionsSections>
                        </GeneralOptions>
                    </InfoOptionsContainer>
                    <EditProfile isOpen={openDialog} close={handleClose} data={user}/>
                </MainContainer>
            </Container>
        </>
    )
}

export default MyAccount
