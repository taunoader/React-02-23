
import './App.css';
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Meist from './pages/Meist';
import Seaded from './pages/Seaded';
import { useState } from 'react';
import Poed from './pages/Poed';

function App() {  // window.location.href ----> JavaScripti sissekirjutatud funktsionaalsus millega saab URLi k2tte
                  // .split('') tykeldab selle s6na selle m2rgi pealt
                  // [0] v6tab vasaku poole, [1] v6tab parema poole
   const [aktiivneUrl, uuendaAktiivneUrl] = useState(window.location.href.split('localhost:3000')[1])
   const [hele, uuendaHele] = useState(true);
   // const [veebisaidiV2rv. uuendaVeebisaidiV2rv] = useState(hele);

   // <button onClick={() => uuendaVeebisaidiV2rv('hele')}>Hele</button>

  return (
    <div className={hele === true ? 'hele-leht' : 'tume-leht' }>
      <button onClick={() => uuendaHele(true)}>Hele</button>
      <button onClick={() => uuendaHele(false)}>Tume</button>
      <Link to="/">
          <img className='pilt' src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

       <Link to="/ostukorv">
          <button className={aktiivneUrl === '/ostukorv' ? 'aktiivne-url' : 'nupp'} onClick={() => uuendaAktiivneUrl('/ostukorv')}>Ostukorv</button>
       </Link>

       <Link to="/lisa-toode">
          <button className={aktiivneUrl === '/lisa-toode' ? 'aktiivne-url' : 'nupp'} onClick={() => uuendaAktiivneUrl('/lisa-toode')}>Toodet lisama</button>
       </Link>

       <Link to="/meist">
          <button className={aktiivneUrl === '/meist' ? 'aktiivne-url' : 'nupp'} onClick={() => uuendaAktiivneUrl('/meist')}>Meist</button>
       </Link>

       <Link to="/seaded">
          <button className={aktiivneUrl === '/seaded' ? 'aktiivne-url' : 'nupp'} onClick={() => uuendaAktiivneUrl('/seaded')}>Seaded</button>
       </Link>

       <Link to='/poed'>
         <button className={aktiivneUrl === '/poed' ? 'aktiivne-url' : 'nupp'} onClick={() => uuendaAktiivneUrl('/poed')}>Poed</button>
       </Link>

    <Routes>
       <Route path="" element={ <Avaleht/> } />
       <Route path="ostukorv" element={ <Ostukorv /> } />
       <Route path="lisa-toode" element={ <LisaToode /> } />
       <Route path="meist" element={ <Meist /> } />
       <Route path="seaded" element={ <Seaded /> } />
       <Route path='poed' element={ <Poed /> } />
   </Routes>
  </div>
  );
}

export default App;
