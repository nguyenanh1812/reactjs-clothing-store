import Home from "./component/page/home/Home";
import BackToTop from "./component/common/backtotop/BackToTop";
import { clothes } from "./data";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sale from "./component/page/sale/Sale";
import Male from "./component/page/male/Male";
import FeMale from "./component/page/female/FeMale";
import Helianthus from "./component/page/helianthus/Helianthus";
import Header from "./component/layout/header/Header";
import Footer from "./component/layout/footer/Footer";
import ItemDetail from "./component/common/clothingDetail/ItemDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home clothes={clothes} />} />
          <Route path="/home" element={<Home clothes={clothes} />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/male" element={<Male />} />
          <Route path="/female" element={<FeMale />} />
          <Route path="/up-to-49k" element={<Helianthus />} />
          {clothes.map((item) => (
            <Route
              exact
              key={item.id}
              path={`/products-${item.id}`}
              element={<ItemDetail item={item} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
      <Header />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
