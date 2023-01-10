import styles from './Cabecalho.module.css'

import React from 'react'
import MenuHamburguer from '../MenuHamburguer'
import Logo from '../Logo'
import Favoritos from '../Favoritos'
import Perfil from '../Perfil'
import MenuNavegacao from '../MenuNavegacao'
import MinhaSacola from '../MinhaSacola'

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
                <MinhaSacola />
                <Perfil />
            </div>
        </header>
    )
}
