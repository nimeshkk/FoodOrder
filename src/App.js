import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import RestaurantSection from "./components/Restaurant/Restaurant";
import AddRestaurantForm from "./components/addRestaurant/addRestaurant";
import Dashboard from "./components/Services/serviceHomePage";
import FoodEntryForm from "./components/Services/addFood";
import ShoppingCartPage from "./components/Services/cart";
import AddReviewForm from "./components/Services/addReview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="navbar" element={<NavBar />} />
        <Route path="home" element={<HomePage />} />
        <Route path="about" element={<About />} />
        <Route path="footer" element={<Footer />} />
        <Route path="services" element={<Dashboard />} />
        <Route path="restaurant" element={<RestaurantSection />} />
        <Route path="addrestaurant" element={<AddRestaurantForm />} />
        <Route path="add-food" element={<FoodEntryForm />} />
        <Route path="cart" element={<ShoppingCartPage />} />
        <Route path="add-review" element={<AddReviewForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
