import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/AdminComponents/Register";
import Login from "./components/AdminComponents/Login";
import Dashboard from "./components/AdminComponents/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin/register" element={<Register />} />
      <Route path="/admin/login" element={<Login />} />
      <Route path="/admin/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
