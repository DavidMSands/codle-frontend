import React from 'react'
import KeyboardKey from './KeyboardKey'

function KeyboardRow( { keys } ) {
  return (
        keys.map((eachKey) => (
    <div>
        <KeyboardKey eachKey = {eachKey}/>
    </div>
  ))
  )
}

export default KeyboardRow