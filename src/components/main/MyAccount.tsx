import React from 'react'
import styled from 'styled-components'
import Switch from '@mui/material/Switch'

import myAccPic from '../../img/myAccPic.png'
import avatar from '../../img/avatar.png'
import editImg from '../../img/editImg.svg'

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
  height: 100%;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
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

const EditProfile = styled.img`
  position: absolute;
  top: 0;
  right: 0;
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
    return (
        <Container>
            <PictureWrapper/>
            <PictureContainer src={myAccPic}/>
            <MainContainer>
                <NameContainer>
                    <Avatar src={avatar}/>
                    <NameDegreeContainer>
                        <span>Иванов Иван</span>
                        <span>Бакалавр</span>
                    </NameDegreeContainer>
                </NameContainer>
                <InfoOptionsContainer>
                    <InfoContainer>
                        <ProfileInfoContainer>
                            <ProfileInfoText>Информация профиля</ProfileInfoText>
                            <EditProfile src={editImg}/>
                            <TextContainer>
                                <RegularText>Люблю футбол, не люблю учебу</RegularText>
                            </TextContainer>
                            <TextContainer>
                                <BoldText>ФИО: </BoldText>
                                <RegularText>Иванов Иван Иванович</RegularText>
                            </TextContainer>
                            <TextContainer>
                                <BoldText>Школа: </BoldText>
                                <RegularText>ИШИТР</RegularText>
                            </TextContainer>
                            <TextContainer>
                                <BoldText>Группа: </BoldText>
                                <RegularText>8К82</RegularText>
                            </TextContainer>
                            <TextContainer>
                                <BoldText>Общежитие: </BoldText>
                                <RegularText>№16</RegularText>
                            </TextContainer>
                            <TextContainer>
                                <BoldText>Комната: </BoldText>
                                <RegularText>666</RegularText>
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
            </MainContainer>
        </Container>
    )
}

export default MyAccount
