import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlavorsPage from "./components/FlavorsPage";
import LoginPage from "./components/LoginPage";
import Homepage from "./components/Homepage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/flavors" element={<FlavorsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;