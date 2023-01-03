import styles from './CampoTexto.module.css'

const CampoTexto = (props) => {
    const placeholderModificada = `${props.placeholder}...`
    return (
        <div className={styles.campoTexto}>
            <label>
                {props.label}
            </label>
            <input 
                required={props.obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default CampoTexto;

