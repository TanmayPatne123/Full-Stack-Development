import React from 'react'
import "./App.css"
import Counter from './components/counter/Counter'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import { Route,Routes,BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App
