import React from "react";
import 'animate.css/animate.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/Learn' element={<h1>Learn Page</h1>} />
          <Route path='/Reference' element={<h1>Reference Page</h1>} />
          <Route path='/ourcommunity' element={<h1>Our Community Page</h1>} />
          <Route path='/Mycommunity' element={<h1>My Community Page</h1>} />
          <Route path='/Community' element={<h1>Community Page</h1>} />
          <Route path='/Blog' element={<h1>Blog Page</h1>} />
          <Route path='/Github' element={<h1>Github Page</h1>} />
          <Route path='/Git' element={<h1>Git Page</h1>} />
          <Route path='Register' element={<h1>Register Page</h1>} />
        </Routes>
      </div>
      <footer/>
    </BrowserRouter>

  );
}
export default App;
