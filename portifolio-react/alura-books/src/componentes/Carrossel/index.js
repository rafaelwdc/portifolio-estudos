import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Carrossel.css'
import livros from '../../assets/livros.json'
import styles from './Carrossel.css'

export default function Carrossel() {
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
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                {...settings}
            >
                {
                    livros.map(livro => {
                        return (
                            <ul className={styles.carrosselSlide}>
                                <SwiperSlide>
                                    <li key={livro.id}>
                                        <img src={livro.path} alt={livro.subtitulo} />
                                    </li>
                                </SwiperSlide>
                            </ul>
                        )
                    })
                }
            </Swiper>
        </>
    )
}