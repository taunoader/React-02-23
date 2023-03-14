import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import ostukorvFailist from '../data/ostukorv.json';

function Ostukorv() { //index/jarjekorranumber  0       1         2        3            4
const [ostukorv, uuendaOstukorv] = useState(ostukorvFailist);
// const months = []; <-- seda ei naita HTMLs

      // const abil voi noole ees luuakse uus muutuja
  const lisa = (uusToode) => {
    ostukorv.push(uusToode);
    uuendaOstukorv(ostukorv.slice()); // <-- HTML uuenduseks
  }

  const kustuta = (j2rjekorraNumber) => {
    ostukorv.splice(j2rjekorraNumber,1); // .splice on kustutamiseks, sulgude sees mitmendat koma mitu tykki kustutan
    uuendaOstukorv(ostukorv.slice());
  }

  return (
    <div>
      {ostukorv.map((toode, jrkNr) => 
        <div key={jrkNr}>
          {toode}
           <button onClick={() => lisa(toode)}>+</button>
           <button onClick={() => kustuta(jrkNr)}>x</button>
        </div> )}
        Ostukorv on tuhi.
        <Link to="/">Tooteid lisama</Link>
    </div>
  )
}

export default Ostukorv