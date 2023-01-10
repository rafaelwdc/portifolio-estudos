import React from 'react'
import { SwiperSlide } from 'swiper/react'
import Banner from '../../componentes/Banner'
import Cabecalho from '../../componentes/Cabecalho'
import Carrossel from '../../componentes/Carrossel'
import apacheKafka from '../../componentes/Carrossel/ApacheKafka.svg'
import mean from '../../componentes/Carrossel/MEAN.svg'
import gestao2 from '../../componentes/Carrossel/Gestão2.svg'
import portugol from '../../componentes/Carrossel/Portugol.svg'
import lideranca from '../../componentes/Carrossel/Liderança.svg'
import acessibilidade from '../../componentes/Carrossel/Acessibilidade.svg'
import gestao from '../../componentes/Carrossel/Gestão.svg'
import sql from '../../componentes/Carrossel/Tuning.svg'
import arquitetura from '../../componentes/Carrossel/Arquitetura.svg'
import ux from '../../componentes/Carrossel/UX.svg'
import construcao from '../../componentes/Carrossel/Construct2.svg'
import './Inicio.module.css'
import recomendacao from './Angular.svg'
import autoraDoMes from './Perfil-escritora.png'
import styles from './Inicio.module.css'
import Card from  '../../componentes/Card'

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
          <SwiperSlide>
            <img src={mean} alt='Livro sobre MEAN da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apacheKafka} alt='Livro sobre apache kafka da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gestao2} alt='Volume 2 do livro sobre gestão da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={portugol} alt='Livro sobre Portugol da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={lideranca} alt='Livro sobre liderança da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={acessibilidade} alt='Livro de acessibilidade na web da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gestao} alt='Volume 1 do livro sobre gestão da Alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sql} alt='Livro sobre  mySQL da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={arquitetura} alt='Livro sobre Arquitetura na web da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ux} alt='Livro sobre experiência do usuario na alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={construcao} alt='Livro sobre construção de website da alura books' />
          </SwiperSlide>
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
          <SwiperSlide>
            <img src={mean} alt='Livro sobre MEAN da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={apacheKafka} alt='Livro sobre apache kafka da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gestao2} alt='Volume 2 do livro sobre gestão da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={portugol} alt='Livro sobre Portugol da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={lideranca} alt='Livro sobre liderança da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={acessibilidade} alt='Livro de acessibilidade na web da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={gestao} alt='Volume 1 do livro sobre gestão da Alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={sql} alt='Livro sobre  mySQL da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={arquitetura} alt='Livro sobre Arquitetura na web da alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ux} alt='Livro sobre experiência do usuario na alura books' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={construcao} alt='Livro sobre construção de website da alura books' />
          </SwiperSlide>
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
