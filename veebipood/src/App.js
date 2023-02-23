
import './App.css';

import { Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Link to="/avaleht">
          <img className='pilt' src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

       <Link to="/ostukorv">
          <button className='nupp'>Ostukorv</button>
       </Link>

       <Link to="/lisa-toode">
          <button className='nupp'>Toodet lisama</button>
       </Link>


    <Routes>
       <Route path="avaleht" element={<div>123</div>} />
       <Route path="ostukorv" element={<div>0</div>} />
        <Route path="lisa-toode" element={<div>LT</div>} />
   </Routes>
  </div>
  );
}

export default App;
