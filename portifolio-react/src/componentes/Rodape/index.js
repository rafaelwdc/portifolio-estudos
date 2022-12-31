import styles from './Rodape.module.css'
import logoBranco from './logo-branco.png'
import React from 'react'

export default function Rodape() {
  return (
    <footer>
        <img src={logoBranco} alt="Logo da Barbearia Alura" />
        <p className={styles.paragrafo}>&copy; Copyright Barbearia Alura - 2019</p>
    </footer>
  )
}
