import "./App.css";
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Pay from "./components/pay";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path='/' element={< Home />}></Route>
                    <Route path='/pay/:owner/:amount' element={< Pay />}></Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
