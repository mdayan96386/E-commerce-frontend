import React from "react";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { ToastContainer } from "react-toastify";
import Setting from "./pages/Setting";
import PrivateComponent from "./components/PrivateComponent";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import History from "./pages/History";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<PrivateComponent />}>
          <Route path="" element={<Home />} />
          <Route path="settings" element={<Setting />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/history" element={<History />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
