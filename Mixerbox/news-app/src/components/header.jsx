import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { Link, useHistory } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  width: 100%;
  border-bottom: 2px solid #eee;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  background: white;
  z-index: 10;
  padding-left: 20px;
`
const Image = styled.img`
  width: 120px;
`
const SearchBarContainer = styled.div`
  position: relative;
`
const SearchIcon = styled.img`
  width: 18x;
  height: 18px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 13px;
`
const SearchBar = styled.input`
  width: 650px;
  height: 44px;
  border-radius: 24px;
  outline: none;
  border: 0;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 9%);
  padding-left: 20px;
  margin-left: 30px;
`
const SearchSuggestionContainer = styled.div`
  width: 650px;
  position: absolute;
  border: 1px solid #eee;
  background: white;
  margin-left: 40px;
  margin-top: 3px;
`
const SearchItem = styled.div`
  padding: 5px 10px;
  cursor: pointer;
  :hover {
    background: #e5e5e5;
  }
`

const Header = () => {
  const [searchText, setSearchText] = useState('')
  const [visible, setVisible] = useState(false)
  const [searchHistory, setSearchHistory] = useState(JSON.parse(localStorage.getItem('history')) || [])
  const inputRef = useRef()
  const history = useHistory()

  const handleSearch = (q) => {
    if (q) {
      history.push(`/result?q=${q}`)
    } else {
      let arr = JSON.parse(localStorage.getItem('history')) ?? []
      arr.push(searchText)
      localStorage.setItem('history', JSON.stringify(arr))

      inputRef.current.value = ''
      setSearchText('')
      setSearchHistory(arr)
      setVisible(false)
      history.push(`/result?q=${searchText}`)
    }
  }

  return (
    <Container>
      <Link to="/">
        <Image src="/Bing-logo.png" />
      </Link>
      <SearchBarContainer>
        <SearchBar
          onChange={(e) => setSearchText(e.target.value)}
          ref={inputRef}
          onFocus={() => setVisible(true)}
          onBlur={() => {
            setTimeout(() => {
              setVisible(false)
            }, 300)
          }}
        />
        <SearchIcon src="/header/search.svg" onClick={() => handleSearch()} />
        {visible && (
          <SearchSuggestionContainer>
            {searchHistory.map((res, idx) => (
              <SearchItem
                key={idx}
                onClick={() => {
                  handleSearch(res)
                }}
              >
                {res}
              </SearchItem>
            ))}
          </SearchSuggestionContainer>
        )}
      </SearchBarContainer>
    </Container>
  )
}
export default Header
