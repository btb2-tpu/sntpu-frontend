import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import NewsCard from "./NewsCard";
import NewsDetails from "./NewsDetails";
import WriteNews from "./WriteNews";
import SideMenu from "./SideMenu";

import catImg from '../../img/catImg.jpg'
import {instance} from "../auth/authModule";
import {useRecoilState} from "recoil";
import {eventState} from "../../model/State";
import {IEvent} from "../../model/types/IEvent";


const Container = styled.div`
  width: 1010px;
  height: 100%;
  margin-left: 41px;
  display: flex;
  flex-direction: column;
`

const OfferNews = styled.div<{isPosting: boolean}>`
  width: 537px;
  height: 49px;
  border-radius: 12px;
  background: white;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  padding-left: 14px;
  padding-right: 14px;
  align-items: center;
  display: ${props => props.isPosting ? 'none' : 'flex'};

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

  &:hover {
    cursor: pointer;
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
    const [isPostingNews, setIsPostingNews] = useState(false)
    const [events, SetEvents] = useRecoilState(eventState)
    const [selected, SetSelected] = useState<IEvent | null>( null)

    const handleOpen = (data: IEvent) => {
        SetSelected(data)
    }

    const handleClose = () => {
        SetSelected(null)
    }

    useEffect(() => {
        instance
            .get("/event")
            .then( response => {
                    SetEvents(response.data)
                }
            )
    }, [])

    return (
        <>
            <SideMenu/>
            <Container>
                {
                    selected != null && <NewsDetails data={selected} close={handleClose}/>
                }
                <OfferNews isPosting={isPostingNews}
                           onClick={() => {
                               setIsPostingNews(true)
                           }}
                >
                    <img src={catImg}/>
                    <span>Хотите предложить новость?</span>
                </OfferNews>
                <WriteNews isPosting={isPostingNews}/>
                <NewsBlock>
                    <span>Новости</span>
                    <NewsList>
                        { events.slice(0, 3).filter((element) => element.type == "news").map((data) => {
                            return <NewsCard key={data.uuid} open={() => {handleOpen(data)}} data={data} />
                        }) }
                    </NewsList>
                </NewsBlock>
                <NewsBlock>
                    <span>Мероприятия</span>
                    <NewsList>
                        { events.slice(0, 3).filter((element) => element.type == "events").map((data) => {
                            return <NewsCard key={data.uuid} open={() => {handleOpen(data)}} data={data} />
                        }) }
                    </NewsList>
                </NewsBlock>
                <NewsBlock>
                    <span>Объявления</span>
                    <NewsList>
                        { events.slice(0, 3).filter((element) => element.type == "announcements").map((data) => {
                            return <NewsCard key={data.uuid} open={() => {handleOpen(data)}} data={data} />
                        }) }
                    </NewsList>
                </NewsBlock>
            </Container>
        </>
    )
}

export default News
