import React from 'react'

import GameRow from './GameRow'

function TileContainer( { guesses } ) {
// debugger
  return (
    <div className='tile-container'>
      {Object.values(guesses).map((word, i) => (
        <GameRow key={i} word={word} color={color}/>
    ))}
    </div>
  )
}

export default TileContainer