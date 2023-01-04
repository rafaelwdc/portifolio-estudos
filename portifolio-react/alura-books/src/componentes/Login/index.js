import styles from './Login.module.css'

import React from 'react'
import Campo from '../Campo'
import Botao from '../Botao'

export default function Login() {
  return (
    <div className={styles.login}>
      <form className={styles.formulario}>
        <h2 className={styles.titulo}>Login e Senha</h2>
        <Campo
          obrigatorio={true}
          label='E-mail ou ID:'
          placeholder='Digite seu e-mail ou ID'
        />
        <Campo
          obrigatorio={true}
          label='Senha:'
          placeholder='Digite sua senha'
          type='password'
        />
        <Botao texto='Entrar' />
      </form>
    </div>
  )
}
