import React from 'react'
import './style/App.css'
import Header from './components/Header'

import Filtros from './components/Filtros'
import Registre from './components/Registre'
import Tabela from './components/Tabela'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <Header />
      
      <Filtros />
      <Registre />
    </div>
  )
}

export default App
