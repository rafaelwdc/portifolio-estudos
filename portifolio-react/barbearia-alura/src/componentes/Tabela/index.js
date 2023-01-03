import styles from './Tabela.module.css'
import React from 'react'

export default function Tabela() {
    return (
        <div className={styles.container}>
            <table className={styles.tabela}>
                <thead className={styles.tabela__cabecalho}>
                    <th className={styles.tabela__celula}>Dia</th>
                    <th className={styles.tabela__celula}>Horário</th>
                </thead>
                <tr className={styles.tabela__linha}>
                    <td className={styles.tabela__celula}>Segunda</td>
                    <td className={styles.tabela__celula}>8h ~ 20h</td>
                </tr>
                <tr className={styles.tabela__linha}>
                    <td className={styles.tabela__celula}>Quarta</td>
                    <td className={styles.tabela__celula}>8h ~ 20h</td>
                </tr>
                <tr className={styles.tabela__linha}>
                    <td className={styles.tabela__celula}>Sexta</td>
                    <td className={styles.tabela__celula}>8h ~ 20h</td>
                </tr>
            </table>
            <bottom>* exceto feriados.</bottom>
        </div>
    )
}
