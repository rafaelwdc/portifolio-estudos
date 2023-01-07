import React from 'react'
import './Categorias.css'

export default function Categorias() {
    return (
        <div>
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
    )
}
