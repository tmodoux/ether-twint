import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Pay from "./components/pay";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={< Home />}></Route>
                <Route path='/pay/:owner/:amount' element={< Pay />}></Route>
            </Routes>
        </div>
    );
}

export default App;
