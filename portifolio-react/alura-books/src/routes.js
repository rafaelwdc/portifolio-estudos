import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicio from './pages/Inicio'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path='/' element={<Inicio />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
