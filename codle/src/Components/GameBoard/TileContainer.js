import React from 'react'
import styled from "styled-components"

import GameRow from './GameRow'

// TODO: refactor styled components into css
const StyledTileContDiv = styled.div`
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;

  height: 420px;
  width: 350px;
`

function TileContainer() {
  const rows = [0, 1, 2, 3, 4, 5]

  return (
    <StyledTileContDiv>
      {rows.map(i => <GameRow key={i}></GameRow>)}
    </StyledTileContDiv>
  )
}

export default TileContainer