import { useState } from 'react'
import './App.css'
import Header from './componentes/header/header'
import Hero from './componentes/hero/hero'
import ListaIngredientes from './componentes/ListaIngredientes/ListaIngredientes'
import Panel from './componentes/Panel/Panel'
import RecipeFormulario from './componentes/RecipeFormulario/RecipeFormulario'
import RecipeHistorial from './componentes/RecipeHistorial/RecipeHistorial'

function App() {
  
  const [selectedIngredientes, setSelectedIngredientes] = useState ([]);
  const [ingredientes] = useState({
    Vegetales: [{name: "Zanahoria", calorias: 25}, {name: "Lechuga", calorias:10}, {name:"cebolla", calorias:45}, {name: "Brocoli", calorias:45}, {name: "Papa", calorias:110}, {name: "Morron", calorias:25}, {name: "Tomate", calorias:25}],

    Proteinas: [{name: "Pollo",calorias: 110}, {name: "Tofu", calorias: 80}, {name: "Carne", calorias:180}, {name: "Pescado", calorias:100},{name: "Huevo", calorias:50}, {name: "Lentejas", calorias:120}, {name: "Atun", calorias:120}]
  });

  const handleAddIngredientes = (ingredientes) => {
    setSelectedIngredientes([...selectedIngredientes, ingredientes]);
  };

  const handleRemoveIngredientes = (index) => {
    selectedIngredientes(setSelectedIngredientes.filter((_, i) => i !== index));
  };

  const handleSaveRecetas = (index) => {
    const savedRecetas = JSON.parse(localStorage.getItem("recetas")) || [];
    localStorage.setItem("recetas", JSON.stringify([...savedRecetas, recetas]));
  };

  return (
    <>
      <div>
        <Header />
        <Hero />
        <ListaIngredientes ingredientes={ingredientes}onAddIngredientes={handleAddIngredientes} />
        <Panel 
        selectedIngredientes={selectedIngredientes}
        onRemoveIngedientes={handleRemoveIngredientes}
        />
        <RecipeFormulario selectedIngredientes={selectedIngredientes} onSaveRecetas={handleSaveRecetas}/>
        <RecipeHistorial />
      </div>
      
    </>
  )
}

export default App
