import styles from './CampoRadio.module.css'

const CampoRadio = (props) => {
    return (
        <div className={styles.campoRadio}>
            <label for="radio-email">
                <input type="radio" name="contato" value={props.valor} />
                {props.label}
            </label>
        </div>
    )
}

export default CampoRadio;
