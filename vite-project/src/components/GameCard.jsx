// Tarjeta de cada juego
import React from "react";
import "../App.css"; // Importa el archivo de estilos
import { useNavigate } from "react-router-dom";
/**
 * Componente que muestra una tarjeta individual de un juego.
 * Recibe las props: titulo, genero, descripcion e imagen.
 */
const GameCard = ({ titulo, id, genero, descripcion, imagen, plataforma, año, desarrollador, completado }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
  try {
    await fetch(`http://localhost:3000/api/juegos/${id}`, { method: "DELETE" });
    alert("Juego eliminado correctamente");
    window.location.reload();
  } catch (error) {
    console.error("Error al eliminar:", error);
  }
};
  return (
    <div className="game-card">
      <img src={imagen} alt={titulo} className="game-image" />
      <div className="game-info">
        <h2 className="game-title">{titulo}</h2>
        <p className="game-id">ID: {id}</p>
        <p className="game-genre">{genero}</p>
        <p className="game-description">{descripcion}</p>
        <p className="game-info-row">Plataforma: <span>{plataforma}</span> — Año: <span>{año}</span></p>
        <p className="game-dev">Desarrollador: {desarrollador}</p>
        <p className="game-completed">Completado: {completado ? "Sí" : "No"}</p>
        <div className="game-buttons">
        <button className="btn-delete" onClick={() => handleDelete(id)}>Eliminar</button>
        <button className="btn-edit" onClick={() => navigate(`/addGame`)}>Actualizar</button>
        <button className="btn-reviews" onClick={() => navigate(`/reviews`)}>Ver Reseñas</button> 
        </div>
       </div>
    </div>
  );
};

export default GameCard;
