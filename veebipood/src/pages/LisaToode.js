import React, { useRef, useState } from 'react'

function LisaToode() { // Reacti hookid
  const [ sonum, uuendaSonum] = useState('Lisa uus toode!'); // oleku muutmine
  const inputiLuger = useRef(); // reference ehk viide inputist

  // function lisa2() {}

  const lisa = () => {
    if (inputiLuger.current.value === '') {
      uuendaSonum('Tyhja nimetusega ei saa toodet lisada');
    } else {
      uuendaSonum('Toode lisatud ' + inputiLuger.current.value)
    }

  }

  return (
    <div>
      <div>{sonum}</div>
      <label>Uue toote nimi</label> <br />
      <input ref={inputiLuger} type="text" /> <br />
      <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode