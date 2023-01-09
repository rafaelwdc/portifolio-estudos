import styles from './Banner.module.css'

import React from 'react'

export default function Banner() {
  return (
    <section className={styles.banner}>
        <h2 className={styles.titulo}>
            Já sabe por onde começar?
        </h2>
        <p className={styles.texto}>
            Encontre em nossa estante o que você precisa para seu desenvolvimento.
        </p>
        <input 
            className={styles.pesquisa}
            type="search"
            placeholder='Qual será sua próxima leitura?'
        />
    </section>
  )
}
