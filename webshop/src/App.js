import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/global/HomePage";
import Cart from "./pages/global/Cart";
import Shops from "./pages/global/Shops";
import { ContactUs } from "./pages/global/ContactUs";
import AdminHome from "./pages/admin/AdminHome";
import AddProduct from "./pages/admin/AddProduct";
import MaintainProducts from "./pages/admin/MaintainProducts";
import MaintainShops from "./pages/admin/MaintainShops";
import MaintainCategories from "./pages/admin/MaintainCategories";
import EditProduct from "./pages/admin/EditProduct"
import NotFound from "./pages/global/NotFound"
import SingleProduct from "./pages/global/SingleProduct"
import NavigationBar from "./components/NavigationBar"

function App() {

  return (
    <div className="App">
      <NavigationBar />

      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="cart" element={<Cart />} />
        <Route path="shops" element={<Shops />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="product/:id" element={<SingleProduct />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/add-product" element={<AddProduct />} />
        <Route path="admin/edit/:id" element={<EditProduct />} />
        <Route path="admin/maintain-products" element={<MaintainProducts />} />
        <Route path="admin/maintain-shops" element={<MaintainShops />} />
        <Route path="admin/maintain-categories"element={<MaintainCategories />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
