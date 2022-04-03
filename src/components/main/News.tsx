import React, {useState} from 'react'
import styled from 'styled-components'
import NewsCard from "./NewsCard";
import NewsDetails from "./NewsDetails";
import WriteNews from "./WriteNews";
import SideMenu from "./SideMenu";


const Container = styled.div`
  width: 1010px;
  height: 100%;
  margin-left: 41px;
  display: flex;
  flex-direction: column;
`

const OfferNews = styled.div`
  width: 537px;
  height: 49px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding-left: 14px;
  padding-right: 14px;
  align-items: center;
  display: flex;
  
  img {
    margin-left: auto;
    
    &:first-child {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-left: inherit;
    }
  }
  
  span {
    font-family: Roboto300, serif;
    color: #7B809A;
    font-size: 14px;
    margin-left: 13px;
  }
`

const NewsBlock = styled.div`
  width:100%;
  min-height: 120px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding: 23px;
  margin-top: 20px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  font-family: Roboto500, serif;
  color: #344767;
  font-size: 16px;
`

const NewsList = styled.div`
  display: flex;
`

const News: React.FC = () => {
    const [openDialog, setOpenDialog] = useState(false)

    const handleOpen = () => {
        setOpenDialog(true)
    }

    const handleClose = () => {
        setOpenDialog(false)
    }

    return (
        <>
            <SideMenu />
            <Container>
                <NewsDetails isOpen={openDialog} close={handleClose}/>
                {/*<OfferNews>*/}
                {/*    <img src={catImg}/>*/}
                {/*    <span>Хотите предложить новость?</span>*/}
                {/*    <img src={settings}/>*/}
                {/*</OfferNews>*/}
                <WriteNews/>
                <NewsBlock>
                    <span>Новости</span>
                    <NewsList>
                        <NewsCard open={handleOpen}/>
                    </NewsList>
                </NewsBlock>
                <NewsBlock>
                    Мероприятия
                </NewsBlock>
                <NewsBlock>
                    Объявления
                </NewsBlock>
            </Container>
        </>
    )
}

export default News
