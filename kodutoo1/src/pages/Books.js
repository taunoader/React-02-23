import React, { useState } from "react";

function Books() {
  const [books, uuendaRaamatud] = useState([
    "The Great Gatsby",
    "War and Peace",
    "Hamlet",
    "Moby Dick",
    "Rehepapp",
    "Sipsik",
  ]);

  const paneOriginaali = () => {
    uuendaRaamatud([
      "The Great Gatsby",
      "War and Peace",
      "Hamlet",
      "Moby Dick",
      "Rehepapp",
      "Sipsik",
    ]);
  };

  const sorteeriAZ = () => {
    books.sort();
    uuendaRaamatud(books.slice()); // .slice() l6ige - l6ikab 2ra p2rinevuskoha
  };

  const sorteeriZA = () => {
    books.sort((a, b) => a.localeCompare(b));
    uuendaRaamatud(books.slice());
  };

  const sorteeriPikkusKasv = () => {
    books.sort((a, b) => a.length - b.length);
    uuendaRaamatud(books.slice());
  };

  const filtreeriTheAlgavad = () => {
    const tulem = books.filter(yksPood => yksPood.startsWith('The')); 
    uuendaRaamatud(tulem);
}

const filtreeriAndSisaldavad = () => {
  const tulem = books.filter(yksPood => yksPood.includes('and')); 
  uuendaRaamatud(tulem);
}

const filtreeriVah10T2helisad = () => {
  const tulem = books.filter(yksPood => yksPood.lenght <= 10); 
  uuendaRaamatud(tulem);
}

const filtreeriMax7T2helisad = () => {
  const tulem = books.filter(yksPood => yksPood.lenght >= 7); 
  uuendaRaamatud(tulem);
}

const muudaV2ikesteksT2htedeks = () => {
  const tulem = books.map(yksPood => yksPood.toLocaleLowerCase())
  uuendaRaamatud(tulem)
}

const muudaSuurteksT2htedeks = () => {
  const tulem = books.map(yksPood => yksPood.toLocaleUpperCase())
  uuendaRaamatud(tulem)
}

const muudaK6igileL6ppuPunkt = () => {
  const tulem = books.map(yksPood => yksPood + '.')
  uuendaRaamatud(tulem)
}

const muudaK6igileL6ppuHyyum2rk = () => {
  const tulem = books.map(yksPood => yksPood + '!')
  uuendaRaamatud(tulem)
}

  const bookList = books.map((book, index) => {
    return <li key={index}>{book}</li>;
  });

  return (
    <div>
      <h2>Minu raamatud</h2>
      <button onClick={paneOriginaali}>reset</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={sorteeriPikkusKasv}>Sorteeri s6na pikkus kasvavalt</button>
      <button onClick={filtreeriTheAlgavad}>Filtreeri The algavad</button>
      <button onClick={filtreeriAndSisaldavad}>Filtreeri sisaldab sona 'and'</button>
      <button onClick={filtreeriVah10T2helisad}>Filtreeri v2hemalt 10 t2helised</button>
      <button onClick={filtreeriMax7T2helisad}>Filtreeri kuni 7 t2helised</button>
      <button onClick={muudaV2ikesteksT2htedeks}>Muuda v2ikesteks tahtedeks</button>
      <button onClick={muudaSuurteksT2htedeks}>Muuda suurteks tahtedeks</button>
      <button onClick={muudaK6igileL6ppuPunkt}>Pane k6igile l6ppu punkt</button>
      <button onClick={muudaK6igileL6ppuHyyum2rk}>Pane k6igile l6ppu hyyum2rk</button>
      <ul>{bookList}</ul>
    </div>
  );
}

export default Books;
