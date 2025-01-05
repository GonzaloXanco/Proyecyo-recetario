import React, {useEffect, useState} from 'react';
import './RecipeHistorial.css'

const RecipeHistorial = () => {
  const [recetas, setRecetas] = useState([]);

  useEffect(() =>{
    const savedRecetas = JSON.parse(localStorage.getItem("recetas")) || [];
    setRecetas(savedRecetas);
  }, []);

  return (
    <div className='Div'>
      <h3>Hisroeial de recetas</h3>

      <ul>
        {recetas.map((recetas, index) => (
          <li key={index}>
            <strong>{recetas.name}</strong> - {recetas.ingredientes.length} ingredientes
            (puntaje: {recetas.score})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeHistorial