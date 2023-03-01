import React, {useState } from 'react'

function Ilmumine() {
    const [n2itaLisainfot, uuendaN2itaLisainfot] = useState(false);
    
  return (
    <div>
        <div onClick={() => uuendaN2itaLisainfot(!n2itaLisainfot)}>
            Sooduskoodi sisestamine ja makse arvutusk2ik
            {n2itaLisainfot === true && <span>A</span>}
            {n2itaLisainfot === false && <span>V</span>}
            </div>
            {n2itaLisainfot === true && <div>Tellitavad tooted ja teenused
                Lisatud teenused
                Family pakett

                Soodustus kuni 29.03.2023
                0,00 €/kuu 

                39,00 €/kuu

                Videolaenutus

                Sisaldub paketis
                FOX NOW 
                
                Sisaldub paketis
                HBO 

                Sisaldub paketis 
                National Geographic keskond

                Sisaldub paketis
                Go3 Film / Paramount+

        	    Sisaldub paketis
                Lastenurk

                Sisaldub paketis
                Setanta Sportsi äpp

                Sisaldub paketis
                5 ekraani

                Sisaldub paketis
                Inspira +

                Sisaldub paketis
                Salvestamine

                Sisaldub paketis
        </div>}
    </div>
  )
}

export default Ilmumine