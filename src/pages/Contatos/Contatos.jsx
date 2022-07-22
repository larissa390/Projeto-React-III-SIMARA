
import Header from '../../components/Header/Header'
import Imagem from '../../pages/Contatos/contato01.svg'
import iconeGit from '../../pages/Contatos/github.png'
import iconeIn from '../../pages/Contatos/in.png'

import './contatos.css'

function Contatos() {
    return (
        <>

            <Header
                image={Imagem}
                description="ilustracao contatos"
            >
                Contatos e Trocas
            </Header>

            <div className='contatos'>
                <a href="https://github.com/larissa390" target="_blank" class="card-redes-sociais">
                    <img src={iconeGit} alt="imagem logo git"></img>
                    <span class="nome-rede-social">Github</span>
                    <span class="nome-usuario-rede-social">/Larissaols</span>
                </a>

                <a href="https://www.linkedin.com/in/larissasantt/" target="_blank" class="card-redes-sociais">
                    <img src={iconeIn} alt="imagem logo linkedlin"></img>
                    <span class="nome-rede-social">Linkedin</span>
                    <span class="nome-usuario-rede-social">Larissa Santana</span>
                </a>

            </div>



        </>





    )
}


export default Contatos