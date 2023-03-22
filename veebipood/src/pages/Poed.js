import React from "react";
import { useState } from "react";
import poedFailist from "../data/poed.json";

function Poed() {
  const [poed, uuendaPoed] = useState(poedFailist);

  const paneOriginaali = () => {
    uuendaPoed(poedFailist);
  };

  const sorteeriAZ = () => {
    // poed.sort(); // tavaline.sort() teeb alati A-Z, aga kui on tegemist stringidega
    poed.sort((a,b) => b.length - a.length);
    uuendaPoed(poed.slice()); // .slice() l6ige - l6ikab 2ra p2rinevuskoha
  };

  const sorteeriZA = () => {
    // Ylemiste.localeCompare(Viimsi)
    // {"nimi": "Ylemiste", "tel": "5527568"}.localeCompare({"nimi": "Viimsi", "tel": "57832423"})
    poed.sort((a, b) => a.localeCompare(b));
    uuendaPoed(poed.slice());
  };

  const sorteeriPikkusKasv = () => {
    // Ylemiste.length - Viimsi.length
    // {"nimi": "Ylemiste", "tel": "5527568"}.length - ({"nimi": "Viimsi", "tel": "57832423"})
    poed.sort((a, b) => a.nimi.length - b.nimi.length);
    // Object.keys(poed[0]).length <-- objekti v6tmete arvvu saamiseks
    uuendaPoed(poed.slice());
  };

  const sorteeriPikkusKah = () => {
    poed.sort((a, b) => b.length - a.length); // kui vastupidi, vahetan a ja b asukoha 2ra
    uuendaPoed(poed.slice());
  };

  const sorteeriAZKolmas = () => {
    // 012345678910
    poed.sort((a, b) => a.nimi[2].localeCompare(b.nimi[2])); // j2rjekorranumber algab 0st      Elas metsas
    uuendaPoed(poed.slice());
  };

  const filtreeriEgaL6ppevad = () => {
    const tulem = poed.filter(yksPood => yksPood.nimi.endsWith("e"));
    uuendaPoed(tulem);
  };

  const filtreeriVah7T2helisad = () => {
    const tulem = poed.filter((yksPood) => yksPood.lenght >= 7);
    uuendaPoed(tulem);
  };

  const filtreeri9T2helised = () => {
    const tulem = poed.filter((yksPood) => yksPood.lenght === 9);
    uuendaPoed(tulem);
  };

  const filtreeriIsSisaldavad = () => {
    const tulem = poed.filter(yksPood => {return{nimi: yksPood.nimi.includes("is")}});
    uuendaPoed(tulem);
  };

  const filtreeriKolmasT2htI = () => {
    const tulem = poed.filter(yksPood => {return{nimi: yksPood.nimi.includes[2] === "i"}});
    uuendaPoed(tulem);
  };

  const muudaSuurteksTahtedeks = () => {
    const tulem = poed.map(yksPood => {return{nimi: yksPood.nimi.toUpperCase("i", "o"), tel: yksPood.tel}});
    uuendaPoed(tulem);
  };

  const muudaKoikITahedOTaheks = () => {
    const tulem = poed.map((yksPood) => {return{nimi: yksPood.nimi.replaceAll("i", "o"), tel: yksPood.tel}});
    uuendaPoed(tulem);
  };

  const muudaKoigileKriipsudEtte = () => {
    const tulem = poed.map(yksPood => {return{nimi: "--" + yksPood.nimi, tel: yksPood.tel}});
    uuendaPoed(tulem);
  };

  const muudaKoigileSuunakood = () => {
    const tulem = poed.map(yksPood => {return{nimi: "+372" + yksPood.nimi, tel: yksPood.tel}});
    uuendaPoed(tulem);
  };

  const arvutaT2hedKokku = () => {
    let sum = 0; // let abil on v6imalik anda muutujale p2rast tema loomist uus v22rtus
    // sum = sum + poed[0].length;
    // sum = sum + poed[1].length
    //        "Kristiine" =>  8   = 0 + 8
    //        "Viimsi"    =>  14  = 8 + 6
    //        "Rocca Al Mare" => 27  = 14 + 13
    poed.forEach((yksPood) => (sum = sum + yksPood.length));
    return sum;
  };

  return (
    <div>
      <div>T2htede arv kokku; {arvutaT2hedKokku()}</div>
      <button onClick={paneOriginaali}>Pane tagasi originaali</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriPikkusKasv}>
        Sorteeri s6na pikkus kasvavalt
      </button>
      <button onClick={sorteeriPikkusKah}>
        Sorteeri s6na pikkus kahanevalt
      </button>
      <button onClick={sorteeriAZKolmas}>
        Sorteeri A-Z kolmanda t2he j2rgi
      </button>
      <br />
      <br />
      <button onClick={filtreeriEgaL6ppevad}>Filtreeri e'ga l6ppevad</button>
      <button onClick={filtreeriVah7T2helisad}>
        Filtreeri v2hemalt 7 t2helised
      </button>
      <button onClick={filtreeri9T2helised}>
        Filtreeri t2pselt 9 t2helised
      </button>
      <button onClick={filtreeriIsSisaldavad}>
        Filtreeri sisaldab lyhendit 'is'
      </button>
      <button onClick={filtreeriKolmasT2htI}>Filtreeri kolmas t2ht 'i'</button>
      <br />
      <br />
      <button onClick={muudaSuurteksTahtedeks}>Muuda suurteks tahtedeks</button>
      <button onClick={muudaKoikITahedOTaheks}>
        Muuda i tahed o tahtedeks
      </button>
      <button onClick={muudaKoigileKriipsudEtte}>
        Muuda i tahed o tahtedeks
      </button>
      <button onClick={muudaKoigileSuunakood}>Muuda telefonidele suunakood</button>
      {poed.map((yksPood, jarjekorraNumber) => <div key={jarjekorraNumber}>{yksPood.nimi} - {yksPood.tel}</div>)}
      <div>------------------</div>
      <div>Ylemiste</div>
      <div>Viimsi</div>
      <div>Rocca al Mare</div>
      <div>Magistrali</div>
      <div>Vesse</div>
      <div>Kristiine</div>
      <div>J2rveotsa</div>
    </div>
  );
}

export default Poed;

// LinkedIn
// MeetFrank
// Ettevõtete kodulehed

// 1. 1,5a 3 n2dalat
// 6x inimest algajad

// 1-2 kuud tasuta
// 3-4 kuud miinimum
// 5-kuud 1 aasta 1000 bruto
// 1.5 aastat 1500 bruto
// 2 2000 bruto
// 3 3000 bruto

// 1.kood selgeks saada
// 2. tööle võetakse (esimesed 6 kuud ei paku ettev6ttele v2ga v22rtust)
//    1-2 aasta pealt
// 3. ettev6tte esimene kood
