import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Avaleht from "./pages/Avaleht";
import Ostukorv from "./pages/Ostukorv";
import LisaToode from "./pages/LisaToode";
import Meist from "./pages/Meist";
import Seaded from "./pages/Seaded";
import { useState } from "react";
import Poed from "./pages/Poed";
import Tooted from "./pages/Tooted";
import HaldaTooted from "./pages/HaldaTooted";
import MuudaToode from "./pages/MuudaToode";
import YksikToode from "./pages/YksikToode";

function App() {
  // window.location.href ----> JavaScripti sissekirjutatud funktsionaalsus millega saab URLi k2tte
  // .split('') tykeldab selle s6na selle m2rgi pealt
  // [0] v6tab vasaku poole, [1] v6tab parema poole
  const [aktiivneUrl, uuendaAktiivneUrl] = useState(
    window.location.href.split("localhost:3000")[1]
  );

  const [veebisaidiVarv, uuendaVeebisaidiVarv] = useState("hele-leht");

  const muudaVeebisaidiVarv = (varv) => {
    uuendaVeebisaidiVarv(varv);
    localStorage.setItem("theme", varv);
  };
  // const [veebisaidiV2rv. uuendaVeebisaidiV2rv] = useState(hele);

  // <button onClick={() => uuendaVeebisaidiV2rv('hele-leht')}>Hele</button>
  // <button onClick={() => uuendaVeebisaidiV2rv('tume-leht')}>Tume</button>
  // <button onClick={() => uuendaVeebisaidiV2rv('varviline-leht')}>Varviline</button>

  return (
    <div className={veebisaidiVarv}>
      <button onClick={() => muudaVeebisaidiVarv("hele-leht")}>Hele</button>
      <button onClick={() => muudaVeebisaidiVarv("tume-leht")}>Tume</button>
      <button onClick={() => muudaVeebisaidiVarv("varviline-leht")}>
        Varviline
      </button>
      <Link to="/">
        <img
          className="pilt"
          src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg"
          alt=""
        />
      </Link>

      <Link to="/ostukorv">
        <button
          className={aktiivneUrl === "/ostukorv" ? "aktiivne-url" : "nupp"}
          onClick={() => uuendaAktiivneUrl("/ostukorv")}
        >
          Ostukorv
        </button>
      </Link>

      <Link to="/lisa-toode">
        <button
          className={aktiivneUrl === "/lisa-toode" ? "aktiivne-url" : "nupp"}
          onClick={() => uuendaAktiivneUrl("/lisa-toode")}
        >
          Toodet lisama
        </button>
      </Link>

      <Link to="/meist">
        <button
          className={aktiivneUrl === "/meist" ? "aktiivne-url" : "nupp"}
          onClick={() => uuendaAktiivneUrl("/meist")}
        >
          Meist
        </button>
      </Link>

      <Link to="/seaded">
        <button
          className={aktiivneUrl === "/seaded" ? "aktiivne-url" : "nupp"}
          onClick={() => uuendaAktiivneUrl("/seaded")}
        >
          Seaded
        </button>
      </Link>

      <Link to="/poed">
        <button
          className={aktiivneUrl === "/poed" ? "aktiivne-url" : "nupp"}
          onClick={() => uuendaAktiivneUrl("/poed")}
        >
          Poed
        </button>
      </Link>

      <Link to="/tooted">
        <button
          className={aktiivneUrl === "/tooted" ? "aktiivne-url" : "nupp"}
          onClick={() => uuendaAktiivneUrl("/tooted")}
        >
          Tooted
        </button>
      </Link>

      <Link to="/halda">
        <button
          className={aktiivneUrl === "/halda" ? "aktiivne-url" : "nupp"}
          onClick={() => uuendaAktiivneUrl("/halda")}
        >
          Halda
        </button>
      </Link>

      <Routes>
        <Route path="" element={<Avaleht />} />
        <Route path="ostukorv" element={<Ostukorv />} />
        <Route path="lisa-toode" element={<LisaToode />} />
        <Route path="meist" element={<Meist />} />
        <Route path="seaded" element={<Seaded />} />
        <Route path="poed" element={<Poed />} />
        <Route path="tooted" element={<Tooted />} />
        <Route path="halda" element={<HaldaTooted />} />
        <Route path="muuda" element={<MuudaToode />} />
        <Route path="yksik-toode" element={<YksikToode />} />
      </Routes>
    </div>
  );
}

export default App;
