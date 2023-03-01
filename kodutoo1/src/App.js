import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className='App'>
      <div>--SIIN ON VARASEM KODUTOO--</div>

      <Link to='/seaded'>
        <button>Seadetesse</button>
      </Link>

      <Routes>
        <Route path='/seaded' element={ <Seaded /> } />
      </Routes>
</div>
  );
}

export default App;
