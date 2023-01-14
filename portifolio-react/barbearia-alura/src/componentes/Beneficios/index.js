import styles from './Beneficios.module.css'
import foto from './beneficios.jpg'

import React from 'react'
import Titulo from '../Titulo'

export default function Beneficios() {
    return (
        <section>
            <Titulo>
                Benefícios
            </Titulo>

            <div className={styles.beneficios__conteudo}>
                <ul className={styles.beneficios__lista}>
                    <li className={styles.beneficios__lista__item}>Atendimento ao Cliente</li>
                    <li className={styles.beneficios__lista__item}>Espaço diferenciado</li>
                    <li className={styles.beneficios__lista__item}>Localização</li>
                    <li className={styles.beneficios__lista__item}>Profissionais Qualificados</li>
                    <li className={styles.beneficios__lista__item}>Pontualidade</li>
                    <li className={styles.beneficios__lista__item}>Limpeza</li>
                </ul>
                <img src={foto} className={styles.beneficios__imagem} alt="Imagem do Cliente fazendo a barba" />
            </div>

            <div className={styles.video}>
                <iframe
                    width="42%"
                    height="420"
                    src="https://www.youtube.com/embed/wcVVXUV0YUY"
                    frameBorder="0"
                    allow="accelerometer; 
                        autoplay; 
                        encrypted-media; 
                        gyroscope; 
                        picture-in-picture"
                    allowFullScreen
                    title='Video do Barbeiro'
                />
            </div>
        </section>
    )
}
