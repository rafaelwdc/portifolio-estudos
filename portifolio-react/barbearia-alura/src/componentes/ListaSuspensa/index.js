import styles from './ListaSuspensa.module.css'

const ListaSuspensa = (props) => {
    return (
        <fieldset className={styles.listaSuspensa}>
            <label>{props.label}</label>
            <select required={props.required} value={props.valor}>
                <option>Manhã</option>
                <option>Tarde</option>
                <option>Noite</option>
            </select>
        </fieldset>
    )
}

export default ListaSuspensa;