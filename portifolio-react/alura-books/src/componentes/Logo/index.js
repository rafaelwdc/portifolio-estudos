import React from 'react'
import logo from './Logo.svg'
import './Logo.css'

export default function Logo() {
    return (
        <>
            <div className='logo'>
                <img src={logo} alt="Logo da AluraBooks" className='imagem' />
            </div>
            <h1 className='titulo'><strong className='negrito'>Alura</strong>Books</h1>
        </>

    )
}
