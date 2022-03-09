import React from 'react'
import { ImStatsBars } from 'react-icons/im';

function Header( { handleModalStyle } ) {

  
  return (
    <div id='header-container'>
      <div id="split">
        <div id='stats-icon'>
          <ImStatsBars size={25} onClick={handleModalStyle} />
        </div>
        <div id="header-title">
          <h1>Codle</h1>
        </div>
      </div>
      <hr id='header-hr'/>
    </div>
  )
}

export default Header