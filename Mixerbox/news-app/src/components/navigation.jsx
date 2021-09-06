import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { NAVIGATION_WIDTH, NAVIGATION_FOLD_WIDTH, PATH_DATA } from '../constants'

const Container = styled.div`
  width: ${NAVIGATION_WIDTH}px;
  border-right: 2px solid #eee;
  position: fixed;
  top: 60px;
  @media (max-width: 900px) {
    width: ${NAVIGATION_FOLD_WIDTH}px;
  }
`
const CategoryLink = styled(Link)`
  color: black;
  text-decoration: none;
`
const CategoryItem = styled.div`
  margin-bottom: 10px;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 32px;
  :hover {
    background: #f5f5f5;
  }
  @media (max-width: 900px) {
    padding-left: 0;
    justify-content: center;
  }
`
const Icon = styled.img`
  margin-right: 10px;
  @media (max-width: 900px) {
    margin-right: 0;
  }
`
const Title = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`

const Navigation = () => {
  return (
    <Container>
      {PATH_DATA.map(({ title, icon, path, visible = true }) => {
        if (visible) {
          return (
            <CategoryLink to={path} key={path}>
              <CategoryItem>
                <Icon src={icon} />
                <Title>{title}</Title>
              </CategoryItem>
            </CategoryLink>
          )
        }
        return <></>
      })}
    </Container>
  )
}
export default Navigation
