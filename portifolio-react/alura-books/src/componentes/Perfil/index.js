import React, { useState } from 'react'
import Login from '../Login';
import './Perfil.css'

export default function Perfil() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <div className='App'>
            <div className={active ? 'icone iconeActive' : 'icone'} onClick={ToggleMode}>
                <div className='perfil perfilIcon'></div>
                <h4 className='tituloIcone'>Meu Perfil</h4>
            </div>
            <div className={active ? 'login loginAberto' : 'login loginFechado'}>
                <Login />
            </div>
        </div>
    )
}
