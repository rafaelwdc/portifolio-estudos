import React from 'react'
import Titulo from '../Titulo'
import styles from './Principal.module.css'
import utensilios from './utensilios.jpg'

export default function Principal() {
    return (
        <section className={styles.principal}>
            <Titulo >
                Sobre a Barbearia Alura
            </Titulo>

            <img className={styles.utensilios} src={utensilios} alt="Utensilios de um barbeiro." />
            <p>
                Localizada no coração da cidade a <strong>Barbearia Alura</strong> traz para o mercado o que há de melhor para o seu cabelo e barba. Fundada em 2019, a Barbearia Alura já é destaque na cidade e conquista novos clientes a cada dia.
            </p>
            <p className={styles.missao}>
                <em>Nossa missão é: <strong>"Proporcionar auto-estima e qualidade de vida aos clientes"</strong>.</em>
            </p>
            <p>
                Oferecemos profissionais experientes e antenados às mudanças no mundo da moda. O atendimento possui padrão de excelência e agilidade, garantindo qualidade e satisfação dos nossos clientes.
            </p>
        </section>
    )
}
