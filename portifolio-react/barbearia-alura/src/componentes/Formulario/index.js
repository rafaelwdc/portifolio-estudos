import styles from './Formulario.module.css'
import React from 'react'
import CampoTexto from '../CampoTexto'
import Mensagem from '../Mensagem'
import CampoRadio from '../CampoRadio'
import ListaSuspensa from '../ListaSuspensa'
import Newsletter from '../Newsletter'
import Botao from '../Botao'

export default function Formulario() {
    return (
        <section className={styles.formulario}>
            <form>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome completo"
                    placeholder="Digite seu nome completo"
                />
                <CampoTexto
                    obrigatorio={true}
                    label="E-Mail"
                    placeholder="Digite seu e-mail"
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Telefone"
                    placeholder="Digite seu telefone"
                />
                <Mensagem />
                <fieldset className={styles.contato}>
                    <legend>Como prefere o nosso contato?</legend>
                    <CampoRadio label="E-Mail" />
                    <CampoRadio label="Telefone" />
                    <CampoRadio label="WhatsApp" />
                </fieldset>
                <ListaSuspensa label="Qual horário prefere ser atendido?" />
                <Newsletter />
                <Botao>
                    Enviar formulário
                </Botao>
            </form>
        </section>
    )
}
