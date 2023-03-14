import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Seaded from './pages/Seaded';
import Books from './pages/Books';
import Numbrid from './pages/Numbrid';

function App() {
  return (
    <div className='App'>
      <div>--SIIN ON VARASEM KODUTOO--</div>

      <Link to='/books'>
        <button>Books</button>
      </Link>

      <Link to='/seaded'>
        <button>Seadetesse</button>
      </Link>

      <Link to='/numbrid'>
        <button>Numbrid</button>
      </Link>

      <Routes>
        <Route path='/seaded' element={ <Seaded /> } />
        <Route path='/books' element={ <Books /> } />
        <Route path='/numbrid' element={ <Numbrid /> } />
      </Routes>
</div>
  );
}

export default App;
