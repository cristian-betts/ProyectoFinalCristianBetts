import React from "react";
import '../App.css';

function ReviewCard({ juegoId, textoReseña, puntuacion, dificultad, horasJugadas, recomendaria, fechaCreacion }) {
return (
<div className="review-card">
<p className="review-game">Juego ID: {juegoId}</p>
<div className="review-stars">
{"★".repeat(puntuacion)}
{"☆".repeat(5 - puntuacion)}
</div>
<p className="review-text">{textoReseña}</p>
<p className="review-hours">Horas jugadas: {horasJugadas}h</p>
<p className="review-difficulty">Dificultad: {dificultad}</p>
<p className="review-recommend">
Recomendaría: {recomendaria ? "Sí" : "No"}
</p>
<p className="review-date">Fecha: {fechaCreacion}</p>
<div className="review-buttons">
<button className="btn-edit-review">Editar</button>
<button className="btn-delete-review">Eliminar</button>
</div>
</div>
);
}

export default ReviewCard;