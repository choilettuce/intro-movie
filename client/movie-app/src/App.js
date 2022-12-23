import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./route/Home/Home";
import Detail from "./route/Detail/Detail";
import Header from "./components/Header/header";
import "./App.css";
import Login from "./components/login/login";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes >
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/" element ={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     </BrowserRouter>
  );
}

export default App;
