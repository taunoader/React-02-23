import React from 'react'
import { useState } from 'react';

function Numbrid() {
    const [numbrid, uuendaNumbrid] = useState([4, 23, 7, 39, 19, 0, 9, 14, 10, 30])

    const paneOriginaali = () => {
        uuendaNumbrid([4, 23, 7, 39, 19, 0, 9, 14, 10, 30]);
      };

    const sorteeriEsimeseNrJ2rgi = () => {
        numbrid.sort((a,b) => a.toString().localeCompare(b.toString()))
    }

    const sorteeriVastupidisesJ2rjekorrasEsimeseNrOsas = () => {
        numbrid.sort((b,a) => b.toString().localeCompare(a.toString()))
    }

    const numbridList = numbrid.map((numbrid, index) => {
        return <li key={index}>{numbrid}</li>;
      });

  return (
    <div>
        <button onClick={paneOriginaali}>reset</button>
        <button onClick={sorteeriEsimeseNrJ2rgi}>Sorteeri esimese numbri j2rgi</button>
        <button onClick={sorteeriVastupidisesJ2rjekorrasEsimeseNrOsas}>Sorteeri vastupidises j2rjekorras esimese numbri osas</button>
        <ul>{numbridList}</ul>
    </div>
  )
}

export default Numbrid