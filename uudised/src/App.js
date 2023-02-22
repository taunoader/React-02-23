import './App.css';
import {Link,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/uudised">
        <button>Uudiste lehele</button>
      </Link>
      <Link to="/kontakt">
        <button>Vota meiega uhendust</button>
      </Link>
      <Link to="meist">
        <button>Info meist</button>
      </Link>
      <Routes>
        <Route path='' element={<div>See on avaleht, nahtav localhost:3000 aadressil</div>} />
        <Route path='uudised' element={<div>See on uudiste leht, nahtav localhost:3000/uudised aadressil</div>} />
        <Route path='kontakt' element={<div>See on kontaktide leht, nahtav localhost:3000/kontakt aadressil</div>} />
        <Route path='meist' element={<div>See on meist leht, nahtav localhost:3000/meist aadressil</div>} />
      </Routes>
    </div>
  );
}

export default App;
