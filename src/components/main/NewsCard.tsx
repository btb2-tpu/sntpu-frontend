import React, {useState} from 'react'
import styled from 'styled-components'

import travka from '../../img/travka.png'
import {IEvent} from "../../model/types/IEvent";
import avatar from "../../img/avatar.png";
import {apiBaseUrl} from "../auth/authModule";


interface IProps {
    data: IEvent,
    open: Function;
}

const Container = styled.div`
  width: 244px;
  height: 273px;
  display: flex;
  flex-direction: column;
  margin: 18px 29px 28px 21px;
  
  span {
    font-family: Roboto300,serif;
    font-size: 14px;
    color: #7B809A;
    margin-top: 9px;
  }
  
  h4 {
    font-family: Roboto500,serif;
    font-size: 20px;
    color: #344767;
    margin: 0;
    padding: 0;
  }
`

const PictureContainer = styled.img`
  height: 138px;
  border-radius: 12px;
  margin-bottom: 7px;
`

const ReadButton = styled.div`
  width: 93px;
  height: 33px;
  border: 1px solid #6FA53B;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 17px;
  
  span {
    color: #6FA53B;
    font-family: Roboto500, serif;
    font-size: 12px;
    margin: 0;
  }
  
  &:hover {
    cursor: pointer;
    border: none;
    background: #6FA53B;
    
    span {
      color: white;
    }
  }
`

const NewsCard: React.FC<IProps> = ({open, data}) => {
    const getAvatar = () => {
        if (data.avatarUUID === null) {
            return avatar
        } else return `${apiBaseUrl}/upload/${data.avatarUUID}`
    }

    return(
        <Container>
            <PictureContainer src={getAvatar()}/>
            <h4>{data.header}</h4>
            <span>{data.description.slice(0, 30) + "..."}</span>
            <ReadButton onClick={() => {open()}}>
                <span>Прочитать</span>
            </ReadButton>
        </Container>
    )
}

export default NewsCard
