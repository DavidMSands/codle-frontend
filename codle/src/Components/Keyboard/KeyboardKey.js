import React from 'react'

function KeyboardKey( { eachKey } ) {
  return (
    <button class="keyboard-key" id={`key-${eachKey}`}>
        {`${eachKey}`}
    </button>
  )
}

export default KeyboardKey