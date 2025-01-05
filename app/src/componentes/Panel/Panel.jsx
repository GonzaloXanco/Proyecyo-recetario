import React from 'react'
import './Panel.css'

const Panel = ({selectedIngredientes, onRemoveIngedientes}) => {
  return (
    <div className='Div'>
      <h3>Ingredientes seleccionados</h3>
      <ul>
        {selectedIngredientes.map((ingredientes, index) =>  (
          <li key={index}>
            {ingredientes.name}({ingredientes.calorias} cal)
            <button onClick={() =>onRemoveIngedientes(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Panel;