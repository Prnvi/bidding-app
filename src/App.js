import React from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MainPage from "./Components/MainPage";


function App() {
  return (
    <div>
         <Router>
          <Routes>
            <Route path="/" element={<MainPage/>}/>
           </Routes>
        </Router>
       
    </div>
  );
}

export default App;
