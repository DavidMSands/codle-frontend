import React from 'react'

function KeyboardKey( { eachKey } ) {
    //this is a little helper function to create the backspace icon when needed
    return (//either return the key, or return the backspace icon
    <>
        {/* {`${eachKey}`} */}
        {eachKey === "backspace" ? "⌫" : eachKey}
    </>
  )
}

export default KeyboardKey