import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Header from './components/header'
import Navigation from './components/navigation'
import News from './components/news'
import Footer from './components/footer'

const Container = styled.div`
  height: 100vh;
`
const NewsContainer = styled.div`
  display: flex;
  margin-top: 60px;
  padding-bottom: 50px;
`
function App() {
  return (
    <Router>
      <Container>
        <Header />
        <NewsContainer>
          <Navigation />
          <Switch>
            <Route path="/:path">
              <News />
            </Route>
            <Route path="/">
              <News />
            </Route>
          </Switch>
        </NewsContainer>
        <Footer />
      </Container>
    </Router>
  )
}

export default App
