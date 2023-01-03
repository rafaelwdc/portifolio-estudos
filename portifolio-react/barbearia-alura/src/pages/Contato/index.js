import Formulario from '../../componentes/Formulario'
import React from 'react'
import Tabela from '../../componentes/Tabela'
import styles from './Contato.module.css'
import Titulo from '../../componentes/Titulo'

export default function Contato() {
  return (
    <main className={styles.container}>
      <Titulo>
        Preencha o Formulário e em breve entraremos em contato!
      </Titulo>
      <Formulario />
      <Titulo>
        Confira nosso horário de atendimento:
      </Titulo>
      <Tabela />
    </main>
  )
}
