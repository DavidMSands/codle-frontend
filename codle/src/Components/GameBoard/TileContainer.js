import React from 'react'

import GameRow from './GameRow'

function TileContainer() {
  const rows = [0, 1, 2, 3, 4, 5]

  return (
    <div className='tile-container'>
      {rows.map(i => <GameRow key={i}></GameRow>)}
    </div>
  )
}

export default TileContainer