import React from 'react'
import { useState } from 'react';
import poedFailist from '../data/poed.json'

function Poed() {
    const [poed, uuendaPoed] = useState(poedFailist);

    const paneOriginaali = () => {
        uuendaPoed(poedFailist);
    }

    const sorteeriAZ = () => {
        poed.sort();
        uuendaPoed(poed.slice()); // .slice() l6ige - l6ikab 2ra p2rinevuskoha
    }

    const sorteeriZA = () => {
        poed.sort((a,b) => a.localeCompare(b));
        uuendaPoed(poed.slice());  
    }

    const sorteeriPikkusKasv = () => {
        poed.sort((a,b) => a.length - b.length);
        uuendaPoed(poed.slice());  
    }

    const sorteeriPikkusKah = () => {
        poed.sort((a,b) => b.length - a.length); // kui vastupidi, vahetan a ja b asukoha 2ra
        uuendaPoed(poed.slice()); 
    }

    const sorteeriAZKolmas = () => {                                                  // 012345678910
        poed.sort((a,b) => a[2].localeCompare(b[2])); // j2rjekorranumber algab 0st      Elas metsas
        uuendaPoed(poed.slice()); 
    }

        const filtreeriEgaL6ppevad = () => {
            const tulem = poed.filter(yksPood => yksPood.endsWith('e')); 
            uuendaPoed(tulem);
    }

        const filtreeriVah7T2helisad = () => {
            const tulem = poed.filter(yksPood => yksPood.lenght >= 7); 
            uuendaPoed(tulem);
        }

        const filtreeri9T2helised = () => {
            const tulem = poed.filter(yksPood => yksPood.lenght === 9); 
            uuendaPoed(tulem);
        }

        const filtreeriIsSisaldavad = () => {
            const tulem = poed.filter(yksPood => yksPood.includes('is')); 
            uuendaPoed(tulem);
        }

        const filtreeriKolmasT2htI = () => {
            const tulem = poed.filter(yksPood => yksPood.includes[2] === 'i'); 
            uuendaPoed(tulem);
        }

        const muudaSuurteksTahtedeks = () => {
            const tulem = poed.map(yksPood => yksPood.toLocaleUpperCase())
            uuendaPoed(tulem)
        }

        const muudaKoikITahedOTaheks = () => {
            const tulem = poed.map(yksPood => yksPood.replaceAll('i', 'o'))
            uuendaPoed(tulem)
        }

        const muudaKoigileKriipsudEtte = () => {
            const tulem = poed.map(yksPood => '--' + yksPood)
            uuendaPoed(tulem)
        }

  return (
    <div>
        <button onClick={paneOriginaali}>Pane tagasi originaali</button>
        <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z-A</button>
        <button onClick={sorteeriPikkusKasv}>Sorteeri s6na pikkus kasvavalt</button>
        <button onClick={sorteeriPikkusKah}>Sorteeri s6na pikkus kahanevalt</button>
        <button onClick={sorteeriAZKolmas}>Sorteeri A-Z kolmanda t2he j2rgi</button>
        <br /><br />
        <button onClick={filtreeriEgaL6ppevad}>Filtreeri e'ga l6ppevad</button>
        <button onClick={filtreeriVah7T2helisad}>Filtreeri v2hemalt 7 t2helised</button>
        <button onClick={filtreeri9T2helised}>Filtreeri t2pselt 9 t2helised</button>
        <button onClick={filtreeriIsSisaldavad}>Filtreeri sisaldab lyhendit 'is'</button>
        <button onClick={filtreeriKolmasT2htI}>Filtreeri kolmas t2ht 'i'</button>
        <br />< br/>
        <button onClick={muudaSuurteksTahtedeks}>Muuda suurteks tahtedeks</button>
        <button onClick={muudaKoikITahedOTaheks}>Muuda i tahed o tahtedeks</button>
        <button onClick={muudaKoigileKriipsudEtte}>Muuda i tahed o tahtedeks</button>
        {poed.map((yksPood, jarjekorraNumber) => <div key={jarjekorraNumber}>{yksPood}</div>)}
        <div>------------------</div>
        <div>Ylemiste</div>
        <div>Viimsi</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>J2rveotsa</div>
    </div>
  )
}

export default Poed;