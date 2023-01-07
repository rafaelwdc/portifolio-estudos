import React from 'react'
import { Link } from 'react-router-dom'
import CabecalhoLink from '../CabecalhoLink'
import styles from './MenuNavegacao.module.css'

export default function MenuNavegacao() {
    return (
        <div>
            <nav className={styles.menuNavegacao}>
                <li><CabecalhoLink className='categorias'/></li>
                <li><Link href="#" className="opcoes__link">Favoritos</Link></li>
                <li><Link href="#" className="opcoes__link">Minha Estante</Link></li>
            </nav>
        </div>
    )
}
