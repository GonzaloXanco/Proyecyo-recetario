import React from 'react';
import './ListaIngredientes.css';

const ListaIngredientes = ({ ingredientes, onAddIngredientes }) => {
  return (
    <div className='list'>
      {Object.keys(ingredientes).map((categoria) => (
        <div key={categoria}>
          <h4>{categoria}</h4>
          <ul>
            {ingredientes[categoria].map((ingrediente) => (
              <li key={ingrediente.name}>
                {ingrediente.name} ({ingrediente.calorias} cal)
                <button onClick={() => onAddIngredientes(ingrediente)}>Agregar</button>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListaIngredientes;
