import styles from './Banner.module.css'
import React from 'react'
import banner from './banner.jpg'

export default function Banner() {
  return (
    <img className={styles.banner} src={banner} alt="Foto da Barbearia Alura" />
  )
}
