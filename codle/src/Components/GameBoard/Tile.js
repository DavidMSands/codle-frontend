import React from 'react'
import styled from "styled-components"

const StyledTileDiv = styled.div`
display: inline-flex;
justify-content: center;
align-items: center;

border: 2px solid #3a3a3c;
font-size: 3.2rem;
font-weight: bold;
line-height: 3.2rem;
text-transform: uppercase;
`

function Tile( { letter, colors, roundIndex, letterIndex} ) {
    return (
        <StyledTileDiv style={{backgroundColor: colors[roundIndex][letterIndex]}}>
        {letter}
        </StyledTileDiv>
    )
}

export default Tile