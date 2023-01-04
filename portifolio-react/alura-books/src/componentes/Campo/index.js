import './Campo.module.css'

const Campo = ({type = 'text', label, placeholder, valor, obrigatorio = false}) => {
    return (
        <div className={'campo'}>
            <label>{label}</label>
            <br/>
            <input
                className='input'
                type={type}
                value={valor}
                required={obrigatorio}
                placeholder={placeholder}
            /> 
        </div>
    )
}
export default Campo