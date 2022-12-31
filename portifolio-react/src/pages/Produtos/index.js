import React from 'react'
import Card from '../../componentes/Card'
import styles from './Produtos.module.css'

import cabelo from '../../componentes/Card/cabelo.jpg'
import barba from '../../componentes/Card/barba.jpg'
import cabeloBarba from '../../componentes/Card/cabelo+barba.jpg'

export default function Produtos() {
  return (
    <main>
      <section className={styles.container}>
          <Card 
            titulo="Cabelo" 
            imagem={cabelo} 
            descricao="Na tesoura ou máquina, como o cliente preferir"
            preco="R$ 25,00"
          />
          <Card 
            titulo="Barba" 
            imagem={barba} 
            descricao="Corte e desenho profissional de barba"
            preco="R$ 18,00"
          />
          <Card 
            titulo="Cabelo + Barba" 
            imagem={cabeloBarba} 
            descricao="Pacote completo de cabelo e barba"
            preco="R$ 35,00"
          />
      </section>
    </main>
  )
}
