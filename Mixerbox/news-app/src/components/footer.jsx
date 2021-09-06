import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: fixed;
  bottom: 0;
  height: 48px;
  width: 100%;
  background: white;
  border-top: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 433px;
`
const Item = styled.div`
  font-size: 10px;
  margin-left: 10px;
  padding: 5px;
`
const Copyright = styled.div`
  font-size: 10px;
  margin-right: 2%;
`

const Footer = () => {
  let data = ['隱私權和Cookie', '法律聲明', '廣告', '關於我們的廣告', '說明', '意見反應']
  return (
    <Container>
      <ItemContainer>
        {data.map((item) => (
          <Item key={item}>{item}</Item>
        ))}
      </ItemContainer>
      <Copyright>© 2021 Microsoft</Copyright>
    </Container>
  )
}
export default Footer
