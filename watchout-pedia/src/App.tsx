import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import TvPage from "./pages/TvPage";
import MovieDetail from "./pages/MoveDetail";
import TvDetail from "./pages/TvDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}></Route>
      <Route path="/tv" element={<TvPage/>}></Route>
      <Route path="/movie/:id" element={<MovieDetail/>}></Route>
      <Route path="/tv/:id" element={<TvDetail/>}></Route>
    </Routes>
  );
}

export default App;
