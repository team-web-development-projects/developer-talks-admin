import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Users from "./pages/Users";
import Login from "./pages/login";
import Header from "./components/header";
import Board from "./pages/Board";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="notice" element={<Main />} />
            <Route path="users" element={<Users type='all'/>} />
            <Route path="reportUsers" element={<Users type='report'/>} />
            <Route path="board" element={<Board type='all'/>} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
