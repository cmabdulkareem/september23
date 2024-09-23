import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/AdminComponents/Register";

function App() {
  return (
    <Routes>
      <Route path="/admin/register" element={<Register />} />
    </Routes>
  );
}

export default App;
