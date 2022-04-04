import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import Dialog from '@mui/material/Dialog'

import {EditProfileText} from '../custom/TextFields'
import {CustomInput} from "../custom/Selects";
import {IconButton} from "@mui/material";
import choosePic from '../../img/choosePic.svg'
import {data} from './MyAccount'
import {instance} from "../auth/authModule";


export interface IProps {
    isOpen: boolean
    close: Function
    data: data
}

const Container = styled.div`
  width: 500px;
  height: 700px;
  background: white;
  box-sizing: border-box;
  padding: 30px 45px 80px 45px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  position: relative;
`

const LineContainer = styled.div`
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;

  span {
    width: 150px
  }
`

const ChoosePic = styled.img`
  height: 20px;
  margin-left: -70px;
`

const SaveButton = styled.div`
  display: flex;
  height: 25px;
  width: 90px;
  border: 1px solid #6FA53B;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 80px;
  right: 215px;

  span {
    margin: 0;
  }

  &:hover {
    cursor: pointer;
  }
`

const EditProfile: React.FC<IProps> = ({isOpen, close, data}) => {
    const [avatar, setAvatar] = useState<File | null>(null)
    const [dataToEdit, setDataToEdit] = useState<data>(data)

    useEffect(() => {
        if (data.firstName !== '') {
            setDataToEdit(data)
        }
    }, [])

    const onChangeTextField = (event: React.ChangeEvent<HTMLInputElement>) => {
        let newData: data = Object.assign({}, dataToEdit)
        if (event.target.value !== null) {
            newData[event.target.id] = event.target.value
        }
        setDataToEdit(newData)
    }

    const sendDataToServer = () => {
        if (avatar !== null) {
            const picToSend = new FormData()
            picToSend.append('avatarUUID', avatar)
            instance.post('/upload', picToSend, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            })
                .then(response => {
                    let newData: data = Object.assign({}, dataToEdit)
                    newData.avatarUUID = response.data.uuid
                    instance.put('/user', newData)
                        .then(() => {
                        })
                })
        }

    }

    return (
        <>
            <Dialog open={isOpen}
                    maxWidth={false}
                    onClose={() => {
                        close()
                    }}
            >
                <Container>
                    <LineContainer>
                        <span>Поменять аватар</span>
                        <label htmlFor="icon-button-file">
                            <CustomInput accept="image/*"
                                         id="icon-button-file"
                                         type="file"
                                         onChange={e => {
                                             if (e.target.files !== null) {
                                                 setAvatar(e.target.files[0])
                                             }
                                         }}
                            />
                            <IconButton color="primary"
                                        aria-label="upload picture"
                                        component="span">
                                <ChoosePic src={choosePic}/>
                            </IconButton>
                        </label>
                    </LineContainer>
                    <LineContainer>
                        <span>Информация о себе</span>
                        <EditProfileText id='description'
                                         variant='standard'
                                         value={dataToEdit.description}
                                         onChange={onChangeTextField}
                                         multiline
                                         maxRows={4}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Фамилия</span>
                        <EditProfileText id='lastName'
                                         variant='standard'
                                         value={dataToEdit.lastName}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Имя</span>
                        <EditProfileText id='firstName'
                                         variant='standard'
                                         value={dataToEdit.firstName}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Отчество</span>
                        <EditProfileText id='middleName'
                                         variant='standard'
                                         value={dataToEdit.middleName}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Школа</span>
                        <EditProfileText id='school'
                                         variant='standard'
                                         value={dataToEdit.school}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Группа</span>
                        <EditProfileText id='group'
                                         variant='standard'
                                         value={dataToEdit.group}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Общежитие</span>
                        <EditProfileText id='dormitory'
                                         variant='standard'
                                         value={dataToEdit.dormitory}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Этаж</span>
                        <EditProfileText id='floor'
                                         variant='standard'
                                         value={dataToEdit.floor}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Комната</span>
                        <EditProfileText id='room'
                                         variant='standard'
                                         value={dataToEdit.room}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <LineContainer>
                        <span>Степень</span>
                        <EditProfileText id='education'
                                         variant='standard'
                                         value={dataToEdit.education}
                                         onChange={onChangeTextField}
                        />
                    </LineContainer>
                    <SaveButton onClick={() => {
                        sendDataToServer()
                    }}>
                        <span>Сохранить</span>
                    </SaveButton>
                </Container>
            </Dialog>
        </>
    )
}

export default EditProfile
