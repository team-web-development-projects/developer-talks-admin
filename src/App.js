import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Notice from "./pages/Notice";
import Users from "./pages/Users";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />}>
            <Route path="main" element={<Main />} />
            <Route path="users" element={<Users type="all" />} />
            <Route path="reportUsers" element={<Users type="report" />} />
            <Route path="board" element={<Board type="all" />} />
            <Route path="reportBoard" element={<Board type="report" />} />
            <Route path="notice" element={<Notice />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
