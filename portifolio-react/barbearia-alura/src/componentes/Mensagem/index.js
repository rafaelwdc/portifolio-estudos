import styles from './Mensagem.module.css'

const Mensagem = () => {
    return (
        <div className={styles.mensagem}>
            <label>
                Mensagem
            </label>
            <textarea 
                required
                placeholder="Digite sua mensagem..."
                cols="70"
                row="10"
            />
        </div>
    )
}

export default Mensagem;