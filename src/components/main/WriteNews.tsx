import React, {ChangeEvent, useState} from 'react'
import styled from 'styled-components'
import {Input, IconButton, MenuItem} from "@mui/material";

import avatar from '../../img/avatar.png'
import choosePic from '../../img/choosePic.svg'
import send from '../../img/send.png'
import {HeaderText, NewsText} from '../custom/TextFields'
import {CustomInput, CustomInputLabel, CustomSelect} from '../custom/Selects'
import {FormControl} from '@mui/material'
import {Event} from "./News";


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
    let [event, setEvent] = useState(new Event())

    const handleSubmit = () => {

    }

    const onChange = (event: ChangeEvent<any>) => {
        let newEvent = Object.assign({}, event)
    }

    const uploadImg = (file: File) => {

    }

    return (
        <Container isPosting={isPosting}>
            <Avatar src={avatar}/>
            <InputsContainer>
                <HeaderText id='header'
                            label='Напишите заголовок'
                            variant='standard'
                            value={event.header}
                            onChange={onChange}
                />
                <NewsText id='description'
                          label='Описание'
                          multiline
                          maxRows={7}
                          variant='standard'
                          value={event.description}
                />
            </InputsContainer>
            <Options>
                <FormControl variant='standard'>
                    <CustomInputLabel id='category-label'>Категория</CustomInputLabel>
                    <CustomSelect
                        labelId='category-label'
                        id='category'
                        label='Категория'
                        value={event.type}
                    >
                        <MenuItem value='news'>Новости</MenuItem>
                        <MenuItem value='events'>Мероприятия</MenuItem>
                        <MenuItem value='announcements'>Объявления</MenuItem>
                    </CustomSelect>
                </FormControl>
                <FormControl variant='standard'>
                    <CustomInputLabel id='forWhom-label'>Для кого</CustomInputLabel>
                    <CustomSelect
                        id='forWho'
                        label='Для кого'
                    />
                </FormControl>
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
            <PostNews src={send}/>
        </Container>
    )
}

export default WriteNews
