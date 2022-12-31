import React from 'react'
import Banner from '../../componentes/Banner'
import Beneficios from '../../componentes/Beneficios'
import Mapa from '../../componentes/Mapa'
import Principal from '../../componentes/Principal'

export default function Inicio() {
  return (
    <>
      <Banner />
      <Principal />
      <Mapa />
      <Beneficios />
    </>
  )
}