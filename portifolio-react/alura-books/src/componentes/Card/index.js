import styles from './Card.module.css'

import React from 'react'
import Carrinho from '../Carrinho'
import Gostar from '../Gostar'

export default function Card({ title, titleCard, texto, image, altImage }) {
    return (
        <div className={styles.card}>
            <div className={styles.cardDescricao}>
                <div className={styles.descricao}>
                    <h2 className={styles.descricaoTitulo}>
                        {title}
                    </h2>
                    <h2 className={styles.descricaoTituloLivro}>
                        {titleCard}
                    </h2>
                    <p className={styles.descricaoTexto}>
                        {texto}
                    </p>
                </div>
                <img src={image} alt={altImage} className={styles.descricaoImagem} />
            </div>
            <div className={styles.cardBotoes}>
                <div className={styles.botoes}>
                    <Carrinho />
                    <Gostar />
                </div>
                <a href='/' className={styles.botaoAncora}>
                    Saiba mais
                </a>
            </div>
        </div >
    )
}