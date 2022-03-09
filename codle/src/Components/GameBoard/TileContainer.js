import React from 'react'

import GameRow from './GameRow'

function TileContainer( { guesses, colors } ) {
  // Object.values(guesses).forEach( (word, i) => console.log(i))
  // console.log(colors)
  return (
    <div className='tile-container'>
      {Object.values(guesses).map((word, i) => (
        <GameRow key={i} word={word} colors={colors} roundIndex={i}/>
    ))}
    </div>
  )
}

export default TileContainer