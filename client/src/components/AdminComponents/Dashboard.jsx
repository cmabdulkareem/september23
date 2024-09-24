import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/admin/checkauth", { withCredentials: true })
      .then((result) => {
        setUser(result.data.email);
      })
      .catch((err) => {
        console.log(err);
        navigate("/admin/login");
      });
  }, []);

  function handleSignout() {
    axios
      .get("http://localhost:3000/admin/signout", { withCredentials: true })
      .then((result) => {
        toast.success(result.data.message);
        navigate("/admin/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <h1>{user}</h1>
      <button onClick={handleSignout}>Signout</button>
      <ToastContainer />
    </div>
  );
}

export default Dashboard;
