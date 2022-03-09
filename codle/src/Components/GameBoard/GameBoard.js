import React, { useState, useEffect } from 'react'

import TileContainer from './TileContainer'


function GameBoard( { guesses, colors }) {
  const [words, setWords] = useState(['planc', 'argus']) //test starter array

  //TODO: in sinatra, only send words to frontend that are 5 characters long and lowercase all words
  useEffect(() => {
    fetch('http://localhost:9292/words')
    .then(r => r.json())
    .then(data => setWords(data))
  }, [])

  // console.log(colors)

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