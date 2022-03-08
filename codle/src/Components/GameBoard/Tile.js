import React from 'react'
import styled from "styled-components"


function Tile( { letter, color } ) {
    const StyledTileDiv = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;

    border: 2px solid #3a3a3c;
    font-size: 3.2rem;
    font-weight: bold;
    line-height: 3.2rem;
    text-transform: uppercase;
    ${() => {
        if (color === "green") {
          return `background-color: #6aaa64;`;
        }
        if (color === "yellow") {
          return `background-color: #b59f3b;`;
        }
    }}
    `
            // console.log("color:", color, color === "green", color === "yellow");

    return (
        <StyledTileDiv >
        {letter}
        </StyledTileDiv>
    )
}

export default Tile