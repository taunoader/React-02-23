import { useState } from "react";

function Meist() {
  const [kontakt, n2itaKontakt] = useState("");
  const tootajad = [
    {
      nimi: "Arvo Part",
      ala: "Uudisklippide taustamuusika",
      telefon: "+37212345",
    },
    { nimi: "Kelly Sildaru", ala: "Pustolreporter", telefon: "+37212123" },
    {
      nimi: "Edward von Longus",
      ala: "Uudiste kujundamine",
      telefon: "+37212346",
    },
    {
      nimi: "Kerli Koiv",
      ala: "Valisturgude spetsialist",
      telefon: "+37212324",
    },
  ];

  return (
    <div>
      <div>See on meist leht, nahtav localhost:3000/meist aadressil</div>
      <div>Meie tootajad:</div>
      <br />
      <div>
        {tootajad.map((tootaja) => (
          <div>
            <div>{tootaja.nimi}</div>
            <div>{tootaja.ala}</div>
            <button onClick={() => n2itaKontakt(tootaja.telefon)}>
              V6ta yhendust
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
      {/*
    <div>Arvo Part</div>
    <div>Uudisklippide taustamuusika</div>
    <button onClick={() => n2itaKontakt('+37212345')}>Vota uhendust</button>
    <br /> <br />
    <div>Kelly Sildaru</div>
    <div>Pustolreporter</div>
    <button onClick={() => n2itaKontakt('+37212123')}>Vota uhendust</button>
    <br /> <br />
    <div>Edward von Longus</div>
    <div>Uudiste kujundamine</div>
    <button onClick={() => n2itaKontakt('+37212346')}>Vota uhendust</button>
    <br /> <br />
    <div>Kerli Koiv</div>
    <div>Valisturgude spetsialist</div>
    <button onClick={() => n2itaKontakt('+37212324')}>Vota uhendust</button>
  <br /> <br /> */}
      {kontakt !== "" && <div>Tema kontakt: {kontakt}</div>}
    </div>
  );
}

export default Meist;
