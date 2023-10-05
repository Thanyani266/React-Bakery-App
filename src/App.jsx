import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuPage from "./components/MenuPage";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/React-Bakery-App" element={<HomePage />}></Route>
        <Route exact path="/menu" element={<MenuPage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
