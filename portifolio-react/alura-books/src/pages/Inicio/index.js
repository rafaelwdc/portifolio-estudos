import React from 'react'
import Banner from '../../componentes/Banner'
import Cabecalho from '../../componentes/Cabecalho'
import Carrossel from '../../componentes/Carrossel'
import './Inicio.module.css'
import recomendacao from './Angular.svg'
import autoraDoMes from './Perfil-escritora.png'
import styles from './Inicio.module.css'
import Card from '../../componentes/Card'
import { SwiperSlide } from 'swiper/react'
import livros from './assets/livros.json'
import 'swiper/css'

export default function Inicio() {
  const settings = {
    spaceBetween: 10,
    slidesPerView: 3,
    navigation: true,
    pagination: {
      clickable: true,
    }
  }
  return (
    <>
      <Cabecalho />
      <Banner />
      <h2 className={styles.tituloCarrossel}>Novos Lançamentos</h2>
      <div className={styles.cardContainer}>
        <Carrossel settings={settings}>
          <ul className={styles.carrosselSlide}>
            {livros.map((livro, index) => {
              return (
                <SwiperSlide >
                  <li key={index}>
                    <img src={livro.path} alt={livro.subtitulo} />
                  </li>
                </SwiperSlide>
              )
            })}
          </ul>
        </Carrossel>
        <Card
          title='Talvez você também se interesse por...'
          titleCard='Angular 11 e Firebase'
          texto='Construindo uma aplicação integrada com a plataforma do Google.'
          image={recomendacao}
          altImage='Capa do livro Angular 11 e Firebase'
        />
      </div>
      <h2 className={styles.tituloCarrossel}>Mais Vendidos</h2>
      <div className={styles.cardContainer}>
        <Carrossel settings={settings}>
          <ul className={styles.carrosselSlide}>
            {livros.map((livro, index) => {
              return (
                <SwiperSlide>
                  <li key={index}>
                    <img src={livro.path} alt={livro.subtitulo} />
                  </li>
                </SwiperSlide>
              )
            })}
          </ul>
        </Carrossel>
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
