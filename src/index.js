import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import App from "./App";
import Favourite from "./components/Favourite";
import Gallery from "./components/Gallery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="gallery" element={<Gallery />} />
        <Route path="favourite" element={<Favourite />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
