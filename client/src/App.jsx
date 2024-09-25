import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./components/AdminComponents/Register";
import Login from "./components/AdminComponents/Login";
import Dashboard from "./components/AdminComponents/Dashboard";
import Products from "./components/AdminComponents/Products";
import Customers from "./components/AdminComponents/Customers";
import Orders from "./components/AdminComponents/Orders";
import Reports from "./components/AdminComponents/Reports";
import AddProducts from "./components/AdminComponents/AddProducts";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Routes>
          <Route path="/admin/register" element={<Register />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/dashboard" element={<Dashboard />}>
            <Route path="products" element={<Products />} />
            <Route path="customers" element={<Customers />} />
            <Route path="orders" element={<Orders />} />
            <Route path="reports" element={<Reports />} />
            <Route path="addproducts" element={<AddProducts />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
