import React, {useEffect, useState} from 'react';
import './RecipeFormulario.css'

const RecipeFormulario = () => {
  const [recetas, setRecetas] = useState ([]);

  useEffect(() => {
    const savedRecetas = JSON.parse(localStorage.getItem("recetas")) || [];
    setRecetas(savedRecetas);
  }, []);

  return (
    <div className='Div'>
      <h3>Tus recetas</h3>
      <ul>
        {recetas.map((recetas,index) =>(
          <li key={index}>
            <strong>{recetas.name}</strong> - {recetas.ingredientes.length} ingredientes
            (Puntaje: {recetas.score})
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecipeFormulario;