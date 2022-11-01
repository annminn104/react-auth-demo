import React from "react";
import { Login } from "./components/auth/login";
import { Register } from "./components/auth/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from "./logo.svg";
import "./interceptors/request";
import "./interceptors/response";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
