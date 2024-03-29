import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import Tagasiside from "./pages/Tagasiside";
import TagasisideAndjad from "./pages/TagasisideAndjad";
import Tegevused from "./pages/Tegevused";

function App() {
  return (
    <div>
      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/tagasiside">
        <button>Tagasisidede lehele</button>
      </Link>
      <Link to='/andjad'>
        <button>Vaata, kes tagasisidet on andnud</button>
      </Link>
      <Routes>
        <Route path="/" exact element={<div>Tere!</div>} />
        <Route path="/tagasiside" exact element={<Tagasiside />} />
        <Route path='/andjad' exact element={<TagasisideAndjad />} />
        <Route path='/tegevused' exact element={<Tegevused />} />
      </Routes>
    </div>
  );
}

export default App;
