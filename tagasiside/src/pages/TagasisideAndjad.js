import { useRef } from "react";
import andjateFail from "../nimed.json";
import { useState } from "react";

function TagasisideAndjad() {
  const [andjad, uuendaAndjad] = useState(andjateFail);

  const filtreeriM = () => {
    const vastus = andjad.filter((element) => element.startsWith("M"));
  };

  const FilterSixLetters = () => {
    const vastus = andjad.filter((element) => element.length === 6);
    uuendaAndjad(vastus);
  };

  const filterEndingY = () => {
    const vastus = andjad.filter((element) => element.length === 6);
  };

  const sortZA = () => {
    andjad.sort();
    andjad.reverse();
    // andjad.sort().reverse();
    uuendaAndjad(andjad.slice());
  };

  const insertEST = () => {
    const vastus = andjad.map((element) => "EST-" + element);
  };

  const kustuta = (index) => {
    andjad.splice(index, 1);
    uuendaAndjad(andjad.slice());
  };

  const andjaRef = useRef();

  const lisa = () => {
    andjad.push(andjaRef.current.value);
    uuendaAndjad(andjad.slice());
  };

  return (
    <div>
      <div>Kuva palju nimesid on .length abil: x tk</div>
      <button>Filtreeri ehk j2ta k6ik M t2hega algavad nimed alles</button>
      {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter */}
      <button>Filtreeri ehk j2ta k6ik t2pselt 6 kohalised nimed alles</button>
      <button>Filtreeri ehk j2ta k6ik y t2hega l6ppevad nimed alles</button>
      {/* https://developer.mozilla.org/en-Us/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */}
      <button>Sorteeri Z-A</button>
      {/* https://developer.mozilla.org/en-Us/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
      <button>Proovi .map funktsiooni - kirjuta iga nime ette 'EST-'</button>
      {andjad.map((element) => (
        <div key={element}>{element}</div>
      ))}
      ;<button>V6imalda kustutada igaYht</button>
      <label>V6imalda uut nime k6ige l6ppu lisada + input + button</label>
      <input ref={andjaRef} type="text" /> <br />
      <button onClick={lisa}>Lisa</button>
    </div>
  );
}

export default TagasisideAndjad;
