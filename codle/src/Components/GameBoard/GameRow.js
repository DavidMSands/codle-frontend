import React, { useState } from 'react'

import Tile from './Tile'

const easy = [1, 2, 3, 4]
const medium = [1, 2, 3, 4, 5]
const hard = [1, 2, 3, 4, 5, 6]

function GameRow() {
  const [level, setLevel] = useState(medium)

  return (
    <div className='tile'>
      {level.map(i => <Tile key={i}></Tile>)}
    </div>
  )
}

export default GameRow