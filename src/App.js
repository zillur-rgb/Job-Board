import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./Pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
