import React from 'react'
import Banner from '../../componentes/Banner'
import Cabecalho from '../../componentes/Cabecalho'
import './Inicio.module.css'
import recomendacao from './Angular.svg'
import autoraDoMes from './Perfil-escritora.png'
import styles from './Inicio.module.css'
import Card from '../../componentes/Card'
import 'swiper/css'
import Carrossel from 'componentes/Carrossel'

export default function Inicio() {

  return (
    <>
      <Cabecalho />
      <Banner />
      <h2 className={styles.tituloCarrossel}>Novos Lançamentos</h2>
      <Carrossel />
      <div className={styles.cardContainer}>
        <Card
          title='Talvez você também se interesse por...'
          titleCard='Angular 11 e Firebase'
          texto='Construindo uma aplicação integrada com a plataforma do Google.'
          image={recomendacao}
          altImage='Capa do livro Angular 11 e Firebase'
        />
      </div>
      <h2 className={styles.tituloCarrossel}>Mais Vendidos</h2>
      <Carrossel />
      <div className={styles.cardContainer}>
        <Card
          title='Autora do Mês'
          titleCard='Juliana Agarikov'
          texto='Analista de sistemas e escritora, Juliana é especialista em Front-End.'
          image={autoraDoMes}
          altImage='Fotografia da autora do mês Juliana Agarikov'
        />
      </div>
    </>
  )
}
