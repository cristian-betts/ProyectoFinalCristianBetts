import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';

//Importar las páginas
import Home from './pages/Home';
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
          <Route path="/reseñas" element={<Reseñas />} />
          <Route path="/añadir-juego" element={<AñadirJuego />} />
          <Route path="/añadir-reseña" element={<AñadirReseña />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>

      {/* Pie de página general */}
      <Footer />
    </>
  )
}

export default App;
