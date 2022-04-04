import React from 'react'
import styled from 'styled-components'
import Dialog from '@mui/material/Dialog'

import travkabig from '../../img/travkaBig.png'
import {IEvent} from "../../model/types/IEvent";
import avatar from "../../img/avatar.png";
import {apiBaseUrl} from "../auth/authModule";

export interface IProps {
    data: IEvent
    close: Function;
}

const Container = styled.div`
  width: 794px;
  background: white;
  box-sizing: border-box;
  padding: 30px 45px 80px 45px;

  h2 {
    margin: 0;
    padding: 0;
    font-family: Roboto500, serif;
    font-size: 24px;
  }
`

const TimeAuditoryContainer = styled.div`
  display: flex;
  color: #7B809A;
  font-family: Roboto500, serif;
  font-size: 16px;
  margin-bottom: 4px;

  span {
    font-family: Roboto300, serif;
    font-size: 16px;
    color: #7B809A;
    margin-left: 8px;
  }
`

const NewsTextContainer = styled.div`
  font-family: Roboto300, serif;
  font-size: 16px;
  margin-top: 15px;
`

const PictureContainer = styled.img`
  margin-top: 15px;
`

const NewsDetails: React.FC<IProps> = ({data, close}) => {

    const getAvatar = () => {
        if (data.avatarUUID === null) {
            return avatar
        } else return `${apiBaseUrl}/upload/${data.avatarUUID}`
    }

    return (
        <Dialog open={true}
                maxWidth={false}
                onClose={() => {
                    close()
                }}
        >
            <Container>
                <TimeAuditoryContainer>
                    Общежитие №16
                    <span>Сегодня в 18:00</span>
                </TimeAuditoryContainer>
                <h2>
                    { data.header }
                </h2>
                <NewsTextContainer>
                    {data.description}
                </NewsTextContainer>
                <PictureContainer src={getAvatar()}/>
            </Container>
        </Dialog>
    )
}

export default NewsDetails
