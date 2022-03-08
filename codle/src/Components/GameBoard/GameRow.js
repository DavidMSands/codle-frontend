import React, { useState } from 'react'
import styled from "styled-components"

import Tile from './Tile'

// TODO: refactor styled components into css
const StyledRowDiv = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
`
const easy = [1, 2, 3, 4]
const medium = [1, 2, 3, 4, 5]
const hard = [1, 2, 3, 4, 5, 6]

function GameRow() {
  const [level, setLevel] = useState(medium)

  return (
    <StyledRowDiv>
      {level.map(i => <Tile key={i}></Tile>)}
    </StyledRowDiv>
  )
}

export default GameRow