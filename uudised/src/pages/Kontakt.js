import { useState } from 'react'


function Kontakt() {
  const [n2itaTelKristiine, muudaN2itaTelKristiine] = useState(false);
  const [n2itaTelYlemiste, muudaN2itaTelYlemiste] = useState(false);
  const [n2itaTelTasku, muudaN2itaTelTasku] = useState(false);

  return (
  <div>
    <div>See on kontaktide leht, nahtav localhost:3000/kontakt aadressil</div>
    <div>Vota meiega uhendust:</div>
    <br />
    <div onClick={() => muudaN2itaTelKristiine(!n2itaTelKristiine)}>Kristiine keskus</div>
    {n2itaTelKristiine && <div>+3725527568</div>}
    <div>Endla 45</div>
    <br />
    <div onClick={() => muudaN2itaTelYlemiste(!n2itaTelYlemiste)}>Ulemiste keskus</div>
    {n2itaTelYlemiste && <div>+354454354</div>}
    <div>Suur-Sojamae 4</div>
    <br />
    <div onClick={() => muudaN2itaTelTasku(!n2itaTelTasku)}>Tasku keskus</div>
    {n2itaTelTasku && <div>+358546555</div>}
    <div>Turu 2</div>
  </div>  );
}

export default Kontakt;