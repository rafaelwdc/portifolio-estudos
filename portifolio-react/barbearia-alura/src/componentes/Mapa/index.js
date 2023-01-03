import React from 'react'
import Map from './Map'
import styles from './Mapa.module.css'
import Titulo from '../Titulo'

export default function Mapa() {
    return (
        <section className={styles.mapa}>
            <Titulo>
                Nosso estabelecimento
            </Titulo>
            <p>Nosso estabelecimento está localizado no coração da cidade.</p>
            <Map />

        </section>
    )
}
