import React from 'react'
import styled from 'styled-components'
import { formatDistance } from 'date-fns'
import { zhTW } from 'date-fns/locale'

const Container = styled.div`
  width: 30%;
  height: 300px;
  margin-bottom: 10px;
  border: 2px solid #eee;
  border-radius: 10px;
  overflow: hidden;
  min-width: 200px;
  margin-right: 2%;
`
const ImageContainer = styled.div`
  width: 100%;
  height: 120px;
  overflow: hidden;
`
const CoverImage = styled.img`
  width: 100%;
`
const ContentContainer = styled.div`
  padding: 5px;
  position: relative;
  height: 180px;
`
const BottomContainer = styled.div`
  font-size: 10px;
  position: absolute;
  bottom: 20px;
  left: 10px;
  color: #666666;
`

const NewsTemplate = ({ data }) => {
  const { title, author, urlToImage, publishedAt } = data // publishedAt, description,
  const timeAgo = formatDistance(new Date(publishedAt), new Date(), { locale: zhTW, addSuffix: false })

  return (
    <Container>
      <ImageContainer>
        <CoverImage src={urlToImage} alt="image missing" />
      </ImageContainer>
      <ContentContainer>
        <h4>{title}</h4>
        <BottomContainer>
          {author} &#8226; {timeAgo.replace('大約', '')}
        </BottomContainer>
      </ContentContainer>
    </Container>
  )
}
export default NewsTemplate
