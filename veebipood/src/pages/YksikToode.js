import React from 'react'
import { useParams } from 'react-router-dom'; // react-router-dom!
import tootedFailist from '../data/tooted.json';

function YksikToode() {
  // useState, useRef, useParams <--- Reacti Hookid
  // Reacti Hookid (Reacti enda kirjutatud koodil6ik, mida on v2ga lihtne kasutusele v6tta)
  // useSuperpower     reactState, reactRef, reactParams
  // 1. use algusega
  // 2. Nad peavad olema imporditud
  // 3. Neil peavad olema kasutusele v6ttes sulud l6pus  = useState() = useRef() = useParams()
  // 4. Neid ei tohi funktsiooni sees kasutusele v6tta (klikiga ei saa hooke kasutusele v6tta)
  //    Nad tekivad alati lehele minnes
  // 5. Neile ei saa dynaamikat teha, ehk vahepeal hook tekib, vahepeal ei teki, ta peab alati tekkima
  const { jrkNr } = useParams(); // App.js: path='yksik-toode/:jrkNr'
  const leitud = tootedFailist[jrkNr];

  // const cars = ["Saab", "Volvo", "BMW"]
  // let x = cars[1]

  // const leitud = ["Nobe", "Tesla", "BMW"][2]; ---> leitud sisse tuleb "BMW"

  return (
    <div>
      <div>Klikitud toote j2rjekorranumber: {jrkNr}</div>
      <div>Klikitud toote nimi: {leitud.nimi}</div>
      <div>Klikitud toote hind: {leitud.hind}</div>
      <div>Tema kirjeldus...</div>
      <div>Koostisosad: ..  ..  ..</div>
    </div>
  )
}

export default YksikToode