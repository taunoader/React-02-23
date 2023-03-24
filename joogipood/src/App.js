import "./App.css";
import Jook from "./Pages/Jook";
import { Link, Route, Routes } from "react-router-dom";
import LisaJook from "./Pages/LisaJook";
import HaldaJooke from "./Pages/HaldaJooke";

function App() {
  return (
    <div className="App">

      <Link to="/">
        <button>Avalehele</button>
      </Link>
      <Link to="/lisa">
        <button>Jooke lisama</button>
      </Link>
      <Link to="/halda">
        <button>Jooke haldama</button>
      </Link>
      <Routes>
        <Route path="/" element={<div>Tere!</div>} />
        <Route path="/lisa" element={<LisaJook />} />
        <Route path="/halda" element={<HaldaJooke />} />
        <Route path="jook/:number" element={<Jook />} />
      </Routes>
    </div>
  );
}

export default App;
