
import './App.css';

import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';

function App() {
  return (
    <div className="App">
      <Link to="/">
          <img className='pilt' src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

       <Link to="/ostukorv">
          <button className='nupp'>Ostukorv</button>
       </Link>

       <Link to="/lisa-toode">
          <button className='nupp'>Toodet lisama</button>
       </Link>

    <Routes>
       <Route path="" element={ <Avaleht/> } />
       <Route path="ostukorv" element={ <Ostukorv /> } />
        <Route path="lisa-toode" element={ <LisaToode /> } />
   </Routes>
  </div>
  );
}

export default App;
