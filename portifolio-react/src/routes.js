import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contato from './pages/Contato'
import Inicio from './pages/Inicio'
import PaginaBase from './pages/PaginaBase'
import Produtos from './pages/Produtos'

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<Inicio />}></Route>
          <Route path="produtos" element={<Produtos />}></Route>
          <Route path="contato" element={<Contato />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
