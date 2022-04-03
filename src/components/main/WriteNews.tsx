import React from 'react'
import styled from 'styled-components'

import avatar from '../../img/avatar.png'
import {HeaderText, NewsText} from '../custom/TextFields'

const Container = styled.div`
  width: 100%;
  min-height: 160px;
  background: white;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  display: flex;
  box-sizing: border-box;
  padding: 9px 14px 9px 14px ;
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
`

const WriteNews: React.FC = () => {
    return (
        <Container>
            <Avatar src={avatar}/>
            <InputsContainer>
                <HeaderText id='header-text'
                            label='Напишите заголовок'
                            variant='standard'
                />
                <NewsText id='news-text'
                          label='Описание'
                          multiline
                          maxRows={7}
                          variant='standard'/>
            </InputsContainer>
            <Options>
            </Options>
        </Container>
    )
}

export default WriteNews
