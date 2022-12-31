import styles from './Card.module.css'
import React from 'react'

export default function Card({ titulo, imagem, descricao, preco }) {
  return (
    <div className={styles.card}>
        <h2>{titulo}</h2>
        <img src={imagem} alt={titulo} />
        <p>{descricao}</p>
        <p className={styles.preco}>{preco}</p>
    </div>
  )
}
