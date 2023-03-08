import React, { useState } from 'react'


function Meist() {
const [n2itaEmaili, uuendaN2itaEmaili] = useState(false);
                                          // kui pole sellist v6tit - tuleb 'null'
const [telefon, uuendaTelefon] = useState(localStorage.getItem('telefon') || '');
const [aadress, uuendaAadress] = useState(localStorage.getItem('aadress') || '');

  return (
    <div>
        <div>Meie e-mail: {n2itaEmaili === true && localStorage.getItem('email')}
      {n2itaEmaili === false && <button onClick={() => uuendaN2itaEmaili(true)}>N2ita e-maili</button> }
      </div>
        <div>Meie telefon: {telefon}
          {telefon.startsWith('+372') === false && <button onClick={() => uuendaTelefon('+372' + telefon)}>Lisa suunakood</button>}
        </div>
        <div>Meie aadress: {aadress}
        <button onClick={() => uuendaAadress(aadress.toUpperCase())}>Suurteks t2htedeks</button>
        <button onClick={() => uuendaAadress(aadress.toLowerCase())}>V2ikesteks t2htedeks</button>
        </div>
    </div>
  )
}

export default Meist