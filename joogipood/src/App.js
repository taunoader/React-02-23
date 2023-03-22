import './App.css';
import Jook from './Pages/Jook';
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path="jook/:number" element={ <Jook /> } />
      </Routes>
    </div>
  );
}

export default App;
