import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home'
import AddGame from './pages/AddGame';
import AddReview from './pages/AddReview';
import Dashboard from './pages/Dashboard';
import Reviews from './pages/Reviews';
import './App.css'

function App() {
  
  return (
    <>
      {/* Encabezado general */}
      <Header />

      {/* Contenido dinámico (las páginas cambian aquí) */}
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/addGame" element={<AddGame />} />
          <Route path="/addReview" element={<AddReview />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
         <Home />
      </main>
      {/* Pie de página general */}
      <Footer />
    </>
  )
}

export default App;
