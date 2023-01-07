import React, { useState } from 'react'
import Categorias from '../Categorias';
import './MenuHamburguer.css'

export default function MenuHamburguer() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <div className='App'>
            <div 
                className={
                    active 
                    ? 'icon iconActive' 
                    : 'icon'
                } 
                onClick={ToggleMode}
            >
                <div className='hamburguer hamburguerIcon'></div>
            </div>
            <div 
                className={
                    active 
                    ? 'menu menuOpen' 
                    : 'menu menuClose'
                }
            >
                <Categorias />
            </div>
        </div>
    )
}
