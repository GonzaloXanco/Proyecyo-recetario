import React from 'react'
import './header.css'

const header = () => {
  return (
    <div>
        <header>
          <nav className='Menu'>
            <div className='MenuLeft'>
              <h2>Cocinando tu receta</h2>
            </div>

            <div className='MenuRight'>
              <ul>
                <li><a href="#">Ingredientes</a></li>
                <li><a href="#">Crea tu receta</a></li>
                <li><a href="#">Historial</a></li>
              </ul>
            </div>
          </nav>
        </header>
    </div>
  )
}

export default header
