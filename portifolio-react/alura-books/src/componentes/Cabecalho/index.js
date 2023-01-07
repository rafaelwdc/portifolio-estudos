import styles from './Cabecalho.module.css'

import React from 'react'
import MenuHamburguer from '../MenuHamburguer'
import Logo from '../Logo'
import Favoritos from '../Favoritos'
import Carrinho from '../Carrinho'
import Perfil from '../Perfil'
import MenuNavegacao from '../MenuNavegacao'

export default function Cabecalho() {
    return (
        <header className={styles.cabecalho}>
            <div className={styles.ladoEsquerdo}>
                <MenuHamburguer />
                <Logo />
            </div>
            <div className={styles.centro}>
                <MenuNavegacao />
            </div>
            <div className={styles.ladoDireito}>
                <Favoritos />
                <Carrinho />
                <Perfil />
            </div>
        </header>
    )
}
