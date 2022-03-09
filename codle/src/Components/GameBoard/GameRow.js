import React, { useState } from 'react'

import Tile from './Tile'
 
// difficulty level for future implementation - see pitch notes
const easy = [1, 2, 3, 4]
const medium = [1, 2, 3, 4, 5]
const hard = [1, 2, 3, 4, 5, 6]
//

const rows = [0, 1, 2, 3, 4, 5]


function GameRow( { word, colors, roundIndex} ) {
  const [level, setLevel] = useState(medium)
  // console.log(colors)
  return (
    <div className='tile'>
      {word.map((letter, i) => <Tile key={i} letter={letter} colors={colors} roundIndex={roundIndex} letterIndex={i}/>)}
    </div>
  )
}

export default GameRow