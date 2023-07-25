import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Side from "./pages/Side";

function App() {
  return (
    <div className="App">
      <div className="bg-blue-500 p-4">
        <h1 className="text-white text-2xl font-bold">Hello, Tailwind CSS!</h1>
      </div>
      <div className="w-392px h-267px">
        <div className="w-392px h-267px absolute left--234.5px top--175.5px bg-#d9d9d9" />
        <div className="w-119px h-103px absolute left--97.5px top--98.5px bg-#e65e5e" />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}/>
            <Route path="/side" element={<Side />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
