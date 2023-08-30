import "./styles.css";
import Navbar from "./components/navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/home";
import { useState } from "react";
import { AppContext } from "./components/appContext";
import Favourite from "./components/favourite";

export default function App() {
  const [searchBreed, setSearchBreed] = useState("");
  const [favouriteBreed, setFavouriteBreed] = useState([]);
  return (
    <BrowserRouter>
      <AppContext.Provider
        value={{
          searchBreed,
          setSearchBreed,
          setFavouriteBreed,
          favouriteBreed
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </AppContext.Provider>
    </BrowserRouter>
  );
}
