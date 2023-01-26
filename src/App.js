import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './page/About';
import Careers from './page/Careers';
import Events from './page/Events';
import Home from './page/Home';
import Resources from './page/Resources';

function App() {
    return (
        <HashRouter>
            <ModalSwitch />
        </HashRouter>
    )
}

const ModalSwitch = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/events" element={<Events />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default App;
