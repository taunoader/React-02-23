import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Avaleht from './pages/Avaleht';
import LisaArvuti from './pages/LisaArvuti';
import VaataArvuteid from './pages/VaataArvuteid';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Ostukorv from './pages/Ostukorv';

function App() {
  const notify = () => toast('Wow so easy!');

  return (
    <div>
        <button onClick={notify}>Notify!</button>
      <ToastContainer />
      <Link to='/'>
        <button>Avalehele</button>
      </Link>
      <Link to='/all'>
        <button>Vaata sulearvuteid</button>
      </Link>
      <Link to='/add'>
        <button>Lisa sulearvuti</button>
      </Link>
<Routes>
  <Route path='' exact element={ <Avaleht /> } />
  <Route path='all' exact element={ <VaataArvuteid />} />
  <Route path='add' exact element={<LisaArvuti />} />
  <Route path='cart' exact element={<Ostukorv />} />
</Routes>
    </div>
  );
}

export default App;
