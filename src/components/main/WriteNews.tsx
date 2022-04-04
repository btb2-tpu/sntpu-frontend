import React, {ChangeEvent, useState} from 'react'
import styled from 'styled-components'
import {Input, IconButton, MenuItem, SelectChangeEvent} from "@mui/material";

import avatar from '../../img/avatar.png'
import choosePic from '../../img/choosePic.svg'
import send from '../../img/send.png'
import {HeaderText, NewsText} from '../custom/TextFields'
import {CustomFormControl, CustomInput, CustomInputLabel, CustomSelect} from '../custom/Selects'
import {apiBaseUrl, instance} from "../auth/authModule";
import {IEvent} from "../../model/types/IEvent";
import {useRecoilState} from "recoil";
import {eventState, userState} from "../../model/State";


interface IProps {
    isPosting: boolean
}

const Container = styled.div<{isPosting: boolean}>`
  width: 100%;
  min-height: 160px;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: ${props => props.isPosting ? 'flex' : 'none'};
  box-sizing: border-box;
  padding: 9px 14px 9px 14px;
  position: relative;
`

const Avatar = styled.img`
  height: 32px;
  border-radius: 50%;
`

const InputsContainer = styled.div`
  width: 577px;
  display: flex;
  flex-direction: column;
  margin-left: 14px;
`

const Options = styled.div`
  display: flex;
  margin-left: 100px;
  margin-top: -3px;
`

const ChoosePic = styled.img`
  height: 20px;
  margin-left: 10px;
  margin-top: 20px;
`

const PostNews = styled.img`
  position: absolute;
  right: 35px;
  bottom: 15px;
  height: 20px;
  
  &:hover {
    cursor: pointer;
  }
`

const WriteNews: React.FC<IProps> = ({isPosting}) => {
    let [event, setEvent] = useState(new IEvent())
    const [events, SetEvents] = useRecoilState(eventState)
    const [user, setUserState] = useRecoilState(userState)

    const getAvatar = () => {
        if (user.avatarUUID === null) {
            return avatar
        } else return `${apiBaseUrl}/upload/${user.avatarUUID}`
    }

    const handleSubmit = () => {
        instance.post("/event", event).then(
            () => {
                instance
                    .get("/event")
                    .then( response => {
                            SetEvents(response.data)
                        }
                    )
            }
        )
    }

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newEvent = Object.assign({}, event)
        newEvent[e.target.id] = e.target.value
        setEvent(newEvent)
    }

    const onChangeSelect = (e: SelectChangeEvent<unknown>) => {
        let newEvent = Object.assign({}, event)
        newEvent.type = e.target.value as string
        setEvent(newEvent)
    }

    const uploadImg = (file: File) => {
        const data = new FormData()
        data.append('avatarUUID', file)
        instance.post("/upload", data ,{
                headers: {
                    'content-type': 'multipart/form-data'
                }
            }
        ).then( (response) => {
                let newEvent = Object.assign({}, event)
                newEvent.avatarUUID = response.data["uuid"]
                setEvent(newEvent)
            }
        )
    }

    return (
        <Container isPosting={isPosting}>
            <Avatar src={getAvatar()}/>
            <InputsContainer>
                <HeaderText id='header'
                            label='Напишите заголовок'
                            variant='standard'
                            value={event.header}
                            onChange={onChangeText}
                />
                <NewsText id='description'
                          label='Описание'
                          multiline
                          maxRows={7}
                          variant='standard'
                          value={event.description}
                          onChange={onChangeText}
                />
            </InputsContainer>
            <Options>
                <CustomFormControl variant='standard'>
                    <CustomInputLabel id='category-label'>Категория</CustomInputLabel>
                    <CustomSelect
                        labelId='category-label'
                        id='type'
                        label='Категория'
                        value={event.type}
                        onChange={onChangeSelect}
                    >
                        <MenuItem value='news'>Новости</MenuItem>
                        <MenuItem value='events'>Мероприятия</MenuItem>
                        <MenuItem value='announcements'>Объявления</MenuItem>
                    </CustomSelect>
                </CustomFormControl>
                <label htmlFor="icon-button-file">
                    <CustomInput accept="image/*"
                                 id="icon-button-file"
                                 type="file"
                                 onChange={e => {
                                     if(e.target.files !== null) {
                                         uploadImg(e.target.files[0])
                                     }
                                 }}
                    />
                    <IconButton color="primary"
                                aria-label="upload picture"
                                component="span">
                        <ChoosePic src={choosePic}/>
                    </IconButton>
                </label>
            </Options>
            <PostNews src={send} onClick={handleSubmit}/>
        </Container>
    )
}

export default WriteNews
