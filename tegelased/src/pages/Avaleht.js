import React from "react";
import { useState } from "react";

function Avaleht() {
  const tegelased = [
    { eesnimi: "Mickey", perenimi: "Mouse", elukoht: "Disneyland", vanus: 25 },
    { eesnimi: "Minnie", perenimi: "Mouse", elukoht: "Disneyland", vanus: 25 },
    { eesnimi: "Winnie", perenimi: "Pooh", elukoht: "Hundred Acre Wood", vanus: 20 },
    { eesnimi: "Roo", perenimi: "Kangaroo", elukoht: "Hundred Acre Wood", vanus: 9 },
    { eesnimi: "Scooby", perenimi: "Doo", elukoht: "Crystal Cove", vanus: 7 },
  ];
  const [klikitudNimi, uuendaKlikitudNimi] = useState("");

  const kuvaNimi = (tegelane) => {
    // console.log(tegelane.eesnimi);
    uuendaKlikitudNimi(tegelane.eesnimi);
  };

  const valiTegelane = (klikitudTegelane) => {
    const valitud = JSON.parse(localStorage.getItem("valitudTegelased")) || [];
    valitud.push(klikitudTegelane);
    localStorage.setItem("valitudTegelased", valitud);
  }

  return (
    <div>
      <div>Klikkisid tegelase {klikitudNimi} peal</div>
      {tegelased.map((tegelane) => (
        <div>
          <div>{tegelane.eesnimi}</div>
          <div>{tegelane.perenimi}</div>
          <div>{tegelane.elukoht}</div>
          <div>{tegelane.vanus}</div>
          <button onClick={() => valiTegelane(tegelane)}>Vali</button>
          <button onClick={() => kuvaNimi(tegelane)}>Kuva nimi</button>
        </div>
      ))}
    </div>
  );
}

export default Avaleht;
