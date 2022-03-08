import React, { useEffect } from 'react'

function GameBoard() {
  useEffect(() => {
    fetch('http://localhost:9292/words')
    .then(r => r.json())
    .then(data => console.log(data))
  }, [])

  return (
    <div>
    </div>
  )
}

export default GameBoard