import React, { useState } from 'react'
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
                <div className='list'>
                    <ul className='listItems'>
                        <li className='tituloMenuHamburguer'>
                            Categorias
                        </li>
                        <li>
                            Programação
                        </li>
                        <li>
                            Front-end
                        </li>
                        <li>
                            Infraestrutura
                        </li>
                        <li>
                            Business
                        </li>
                        <li>
                            Design & UX
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}
