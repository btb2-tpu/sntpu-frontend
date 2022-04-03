import React from 'react'
import styled from 'styled-components'
import Dialog from '@mui/material/Dialog'

import travkabig from '../../img/travkaBig.png'

export interface IProps {
    isOpen: boolean;
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

const NewsDetails: React.FC<IProps> = ({isOpen, close}) => {

    return (
        <Dialog open={isOpen}
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
                    Дезинсекция 24.04
                </h2>
                <NewsTextContainer>
                    В общежитии №16 (ул. Вершинина д. 46) 24 апреля будет проведена дезинсекция. <br/>Начало в 10:00.
                    Требуется подготовить комнату:<br/> Продукты, посуда и средства гигиены убраны в шкафы <br/>
                    ✅ Мебель отодвинута от стен на небольшое расстояние <br/>
                    ✅ Пространство под кроватями и столами освобождено <br/>
                    ✅ Уборка комнаты полностью проведена <br/>
                    ✅ Матрасы и ковры скручены <br/>
                </NewsTextContainer>
                <PictureContainer src={travkabig}/>
            </Container>
        </Dialog>
    )
}

export default NewsDetails
