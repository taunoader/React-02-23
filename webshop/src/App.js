import { Link, Route, Routes } from "react-router-dom";
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
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useTranslation } from "react-i18next";
import EditProduct from "./pages/admin/EditProduct"
import NotFound from "./pages/global/NotFound"
import SingleProduct from "./pages/global/SingleProduct"

function App() {
  // Firebase yles ---> standartne
  // lisage react-toastify
  // AddProduct.js ---> toote lisamine    refreshiga l2heb algusesse tagasi
  // MaintainProduct.js ---> toote kustutamine  .splice() refreshiga l2heb algusesse tagasi
  // Lisada 3,4 keel veel
  // Favicon
  // Muutke rakenduse nimetus
  // Lisage Google Font

  // Bootstrap -- kodusesse projekti (uudised) 0.5a uuesti vaja peale panna, tuleb lihtsalt meelde
  // i18next -- kodusesse projekti (uudised)
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
  };

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Webshop
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/cart">
              {t("cart")}
            </Nav.Link>
            <Nav.Link as={Link} to="/shops">
              {t("shops")}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              {t("contact")}
            </Nav.Link>
            <Nav.Link as={Link} to="/admin">
              {t("admin")}
            </Nav.Link>
          </Nav>
          <img
            className="lang"
            src="/english.png"
            onClick={() => changeLang("en")}
            alt=""
          />
          <img
            className="lang"
            src="/estonia.png"
            onClick={() => changeLang("ee")}
            alt=""
          />
          <img
            className="lang"
            src="/finland.png"
            onClick={() => changeLang("fin")}
            alt=""
          />
          <img
            className="lang"
            src="/russia.png"
            onClick={() => changeLang("rus")}
            alt=""
          />
        </Container>
      </Navbar>

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
