import styles from './Botao.module.css'

import React from 'react'

 const Botao = (props) => {
  return (
    <button className={styles.botao}>
        {props.children}
    </button>
  )
}
export default Botao