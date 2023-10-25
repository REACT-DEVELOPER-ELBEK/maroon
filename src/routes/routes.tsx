import { Route, Routes } from "react-router-dom";
import Home from "../routes/Home/home";
import Catalog from "./Catalog/Catalog";
const routes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
      </Routes>
    </>
  );
};

export default routes;
