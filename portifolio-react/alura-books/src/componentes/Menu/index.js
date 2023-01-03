import React, { useState } from 'react'
import './Menu.css'
import Hamburguer from '../Hamburguer'

export default function Menu() {   
    const [active, setMode] = useState(false)
    const ToggleMode = () => {
        setMode(!active)
    }
    return (
        <div>
            <div className={active ? "icon iconActive" : "icon"} onClick={ToggleMode}>
                <Hamburguer />
            </div>
            <div className={active ? "menu menuOpen" : "menu menuClose"}>
                <div className="list">
                    <ul className="listItens">
                        <li className="lista-menu__titulo">
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
