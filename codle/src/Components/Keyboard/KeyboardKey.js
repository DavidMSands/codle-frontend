import React from 'react'

function KeyboardKey( { eachKey } ) {

  return (//either return the key, or return the backspace icon
    <>
        {eachKey === "backspace" ? "⌫" : eachKey}
    </>
  )
}

export default KeyboardKey