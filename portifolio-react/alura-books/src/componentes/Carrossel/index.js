import React from 'react'
import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.min.js'
import styles from './Carrossel.module.css'

export default function Carrossel() {
    
    const swiper = new Swiper('.swiper', {
        spaceBetween: 10,
        slidesPerView: 3,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
    });
    
  return (
    <section className={styles.carrossel}>
        <h2 className={styles.titulo}>Novos Lançamentos</h2>
        <div className='carrossel__container'>
            <div className={swiper}>
                <div className='swiper-pagination'></div>
                <div className='swiper-wrapper'>
                    <div class="swiper-slide">
                        <img src="./ApacheKafka.svg" alt="Livro sobre apache kafka da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Gestão2.svg" alt="Volume 2 do livro sobre gestão da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./MEAN.svg" alt="Livro sobre MEAN da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Portugol.svg" alt=" Livro sobre Portugol da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Liderança.svg" alt="Liderança em design da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Liderança.svg" alt="Livro sobre liderança da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Acessibilidade.svg" alt="Livro de acessibilidade na web da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Gestão.svg" alt="Volume 1 do livro sobre gestão da Alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Tuning.svg" alt="Livro sobre  mySQL da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Arquitetura.svg" alt="Livro sobre Arquitetura na web da alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./UX.svg" alt="Livro sobre experiência do usuario na alura books" />
                    </div>
                    <div class="swiper-slide">
                        <img src="./Construct2.svg" alt="Livro sobre construção de website da alura books" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
