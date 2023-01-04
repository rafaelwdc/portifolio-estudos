import styles from './Botao.module.css'

import React from 'react'

const Botao = ({texto}) => {
  return (<button className={styles.botao}>
      {texto}
  </button>
  )
}

export default Botao