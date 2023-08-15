import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Main from "./pages/Main";
import Users from './pages/Users';
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home/>}>
            <Route path="main" element={<Main />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
