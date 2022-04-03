import React, {useState} from 'react'
import styled from 'styled-components'

import travka from '../../img/travka.png'


interface IProps {
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

const NewsCard: React.FC<IProps> = ({open}) => {
    return(
        <Container>
            <PictureContainer src={travka}/>
            <span>Общежитие №16</span>
            <h4>Дезинсекция 24.04</h4>
            <span>Требуется подготовить комнаты</span>
            <ReadButton onClick={() => {open()}}>
                <span>Прочитать</span>
            </ReadButton>
        </Container>
    )
}

export default NewsCard
