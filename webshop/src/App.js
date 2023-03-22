
import './App.css';

// npm install react-router-dom
// BrowserRouter index.js faili
// SIIA FAILI: <Routes> <Routes>
// tehke failid, mida n2ete element sees "pages" kausta

// kustutage yleliigsed failid (impordid)
// Firebase yles
// lisage react-toastify

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={ <HomePage /> } />
        <Route path="cart" element={ <Cart /> } />
        <Route path="shops" element={ <Shops /> } />
        <Route path="contact" element={ <ContactUs /> } />
        <Route path="admin" element={ <AdminHome /> } />
        <Route path="admin/add-product" element={ <AddProduct /> } />
        <Route path="admin/edit-product" element={ <HomePage /> } />
        <Route path="admin/maintain-products" element={ <MaintainProducts /> } />
<Route path="admin/maintain-shops" element={ <MaintainShops /> } />
        <Route path="admin/maintain-categories" element={ <MaintainCategories /> } />
      </Routes>
    </div>
  );
}

export default App;
