import React, { useState, useEffect } from 'react'

import TileContainer from './TileContainer'


function GameBoard() {
  const [words, setWords] = useState(['planc', 'argus']) //test starter array

  //TODO: in sinatra, only send words to frontend that are 5 characters long and lowercase all words
  useEffect(() => {
    fetch('http://localhost:9292/words')
    .then(r => r.json())
    .then(data => setWords(data))
  }, [])

  return (
    <section className='gameboard'>
      <TileContainer></TileContainer>
    </section>
  )
}

export default GameBoard