import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Side from "./pages/Side";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<Login />} />
          <Route path="/side" element={<Side />} />
          <Route path="/main" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
