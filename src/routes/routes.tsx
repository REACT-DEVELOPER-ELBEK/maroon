import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home/home";
import Catalog from "./Catalog/Catalog";
import About from "./about/About";
const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </>
  );
};

export default routes;
