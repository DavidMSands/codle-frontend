import React, { useState, useEffect } from 'react'
import styled from "styled-components"

import TileContainer from './TileContainer'

// TODO: refactor styled components into css
const StyledGameBoard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`

function GameBoard() {
  const [words, setWords] = useState(['planc', 'argus']) //test starter array

  //TODO: in sinatra, only send words to frontend that are 5 characters long and lowercase all words
  useEffect(() => {
    fetch('http://localhost:9292/words')
    .then(r => r.json())
    .then(data => setWords(data))
  }, [])

  return (
    <StyledGameBoard>
      <TileContainer></TileContainer>
    </StyledGameBoard>
  )
}

export default GameBoard