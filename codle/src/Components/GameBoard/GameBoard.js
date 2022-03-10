import React, { useState, useEffect } from 'react'

import TileContainer from './TileContainer'


function GameBoard( { guesses, colors }) {
  return (
    <section className='gameboard'>
      {/* map over guesses array */}
      <TileContainer guesses={guesses} colors={colors}>
        {/* pass in the guesses from a map */}
      </TileContainer>
    </section>
  )
}

export default GameBoard