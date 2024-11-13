import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dex from "../pages/Dex";
import Home from "../pages/Home";
import PokemonCard from "../components/PokemonCard";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dex" element={<Dex />} />
        <Route path="card" element={<PokemonCard />} />
        <Route path="card/:id" element={<PokemonCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
