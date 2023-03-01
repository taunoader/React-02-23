import React, { useState } from 'react'


function Meist() {
const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);

  return (
    <div>
        <div>Meie e-mail: {n2itaEmaili === true && localStorage.getItem('email')}
      {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>N2ita e-maili</button> }
      </div>
        <div>Meie telefon: {localStorage.getItem('telefon')}</div>
        <div>Meie aadress: {localStorage.getItem('aadress')}</div>
    </div>
  )
}

export default Meist