import CampoTexto from '../CampoTexto'
import './Formulario.css'

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2 className=''>Preencha os dados para criar o card do seu time</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"/>
                <CampoTexto label="Imagem" placeholder="Insira o URL da sua imagem"/>
            </form>
        </section>
    )
}

export default Formulario