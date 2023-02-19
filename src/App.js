import './App.css';
import Nav from './components/navbar/navbar';
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/homepage/homepage';
import CartPage from './pages/cart/cart';
import ClothingsPage from './pages/clothings/clothings';
import ContactusPage from './pages/contact/contact';
import RegistrationPage from './pages/registration/registrations';
import StylesPage from './pages/stylespage/stylespage';
import Footer from './components/footer/footer';
import Sustainable from './pages/sustainability/sustainable';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/clothing" element={<ClothingsPage />} />
        <Route exact path="/sustainablity" element={<Sustainable />} />
        <Route path="/styles" element={<StylesPage />} />
        <Route path="/account" element={<RegistrationPage />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />

    </>

  );
}

export default App;
