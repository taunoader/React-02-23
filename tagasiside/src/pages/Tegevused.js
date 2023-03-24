import React from "react";
import { useState } from "react";
import tegevusteFail from "../tegevused.json";

function Tegevused() {
  const [tegevused, uuendaTegevused] = useState(tegevusteFail);

  const n2itaKasutajaYks = () => {
    const vastus = tegevused.filter(element => element.userId === 1);
    uuendaTegevused(vastus);
  }

  const n2itaK6iki = () => {
    uuendaTegevused(tegevusteFail);
  }

  return (
    <div>
        <div>N2ita kogu tegevuse arvu .length abil</div>
        <button onClick={() => n2itaKasutajaYks()}>Kuva k6ik kasutaja ID 1 tegevused</button>
        <button>Kuva k6ik kasutaja ID 2 tegevused</button>
        <button>Kuva k6ik kasutaja ID 3 tegevused</button>
        <button>Kuva k6ik valmis tegevused</button>
        <button>Kuva k6ik mittevalmis tegevused</button>
        <button>Kuva "t" t2hega algavad tegevused</button>
        <button>Kuva tegevused, millel on t2hem2rke rohkem kui 20</button>
        <button onClick={() => n2itaK6iki()}>Kuva k6ik tegevused tagasi</button>
      {tegevused.map((element) => (
        <div>
          <div>{element.userId}</div>
          <div>{element.id}</div>
          <div>{element.title}</div>
          <div>{element.completed}</div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default Tegevused;
