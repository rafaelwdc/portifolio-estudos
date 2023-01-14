import styles from './CarrosselSlide.module.css'
import livros from './livros.json'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

export default function CarrosselSlide() {
    return (

        <ul className={styles.carrosselSlide}>
            {livros.map((livro) => {
                return (
                    <SwiperSlide>
                        <li key={livro.id}>
                            <img src={livro.path} alt={livro.subtitulo} />
                        </li>
                    </SwiperSlide>
                )
            })}
        </ul>
    )
}
