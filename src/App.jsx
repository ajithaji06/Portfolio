import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PageError from "./pages/PageError";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} /> 
        <Route path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
