import React from 'react'
import Card from '../../componentes/Card'
import styles from './Produtos.module.css'
import produtos from 'json/produtos.json'

export default function Produtos() {
  return (
    <main>
      <section>
        <ul className={styles.container}>
          {produtos.map((produto, index) => {
            return (
              <Card
                key={index}
                className={styles.card}
                titulo={produto.titulo}
                imagem={produto.imagem}
                descricao={produto.descricao}
                preco={produto.preco}
              />
            )
          })}
        </ul>
      </section>
    </main>
  )
}
