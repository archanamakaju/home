import React from "react";
import Header from "./Component/Header/Header.Component";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Component/Body/Body.Component";
import Footer from "./Component/Footer/Footer.Component";
import "./scss/style.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" exact element={<Body />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
