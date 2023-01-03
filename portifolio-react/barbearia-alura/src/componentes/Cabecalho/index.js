import styles from './Cabecalho.module.css'
import logo from './logo.png'

import React from 'react'
import { Link } from 'react-router-dom'
import CabecalhoLink from '../CabecalhoLink'

export default function Cabecalho() {
  return (
    <header>
        <div className={styles.caixa}>
            <Link to="./">
                <img src={logo} alt="Logo da Barbearia Alura" />
            </Link>
            <nav className={styles.menu}>
                <CabecalhoLink url="./">
                    Home
                </CabecalhoLink>
                <CabecalhoLink url="./produtos">
                    Produtos
                </CabecalhoLink>
                <CabecalhoLink url="./contato">
                    Contato
                </CabecalhoLink>
            </nav>
        </div>
    </header>
  )
}
