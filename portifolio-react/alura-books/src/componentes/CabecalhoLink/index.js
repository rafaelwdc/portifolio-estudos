import { useState } from 'react'
import Categorias from '../Categorias'
import './CabecalhoLink.css'

export default function CabecalhoLink() {
  const [active, setMode] = useState(false)
  const ToggleMode = () => {
    setMode(!active)
  }
  return (
    <div className='LinkCategorias'>
      <div className={active ? 'link linkAtivo' : 'link'} onClick={ToggleMode}>
        <h2>Categorias</h2>
      </div>
      <div className={active ? 'categorias categoriasAberto' : 'categorias categoriasFechado'}>
        <Categorias />
      </div>

    </div>
  )
}
