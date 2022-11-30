import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  
let saludo = 'Hola soy ItemListContainer'
let saludar = () => {alert('Soy func de app, saludos')}
  return (
    <div> 
      <Navbar/>
      <ItemListContainer saludo={saludo} saludar={saludar} />

    </div>

  )
}

export default App
