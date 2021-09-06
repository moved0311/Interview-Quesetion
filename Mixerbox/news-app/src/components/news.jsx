import React, { useState, useEffect } from 'react'
import { getNews } from '../apis/getNews'
import styled from 'styled-components'
import NewsTemplate from './newsTemplate'
import { NAVIGATION_WIDTH, NAVIGATION_FOLD_WIDTH, PATH_DATA } from '../constants'
import { useParams, useLocation } from 'react-router-dom'

const Container = styled.div`
  padding: 0 10px;
  width: calc(100% - 100px);
  margin-left: ${NAVIGATION_WIDTH}px;
  @media (max-width: 900px) {
    margin-left: ${NAVIGATION_FOLD_WIDTH}px;
  }
`
const NewsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 15px;
`
const PageContainer = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
`
const Page = styled.div`
  border: 1px solid #eee;
  height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px 12px;
  margin-left: 10px;
  cursor: pointer;
`

const News = () => {
  const [news, setNews] = useState([])
  const [total, setTotal] = useState(1)
  const [current, setCurrent] = useState(1)
  const PAGESIZE = 9
  const search = new URLSearchParams(useLocation().search).get('q')
  const { path } = useParams()
  const title = PATH_DATA.find((p) => p.path === path)?.title || '熱門報導'

  useEffect(() => {
    const run = async () => {
      let data = {}
      if (search) {
        data = await getNews({ page: current, pageSize: PAGESIZE, search })
      } else {
        data = await getNews({ page: current, pageSize: PAGESIZE })
      }
      setTotal(data?.totalResults)
      setNews(data?.articles)
    }
    run()
  }, [current, search])

  // const listInnerRef = useRef()
  // const onScroll = () => {
  //   console.log('scroll')
  //   if (listInnerRef.current) {
  //     const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current
  //     if (scrollTop + clientHeight === scrollHeight) {
  //       // TO SOMETHING HERE
  //       console.log('Reached bottom')
  //     }
  //   }
  // }

  return (
    <Container>
      <h3>{title}</h3>
      <NewsContainer>
        {news.map((singleNews) => (
          <NewsTemplate data={singleNews} key={singleNews?.title} />
        ))}
      </NewsContainer>
      <PageContainer>
        {[...Array(Math.ceil(total / PAGESIZE))].map((_, page) => {
          page += 1
          return (
            <Page key={page} onClick={() => setCurrent(page)}>
              {page}
            </Page>
          )
        })}
      </PageContainer>
    </Container>
  )
}
export default News
