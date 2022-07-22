//Criando Rotas

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Sobre from '../pages/Sobre/Sobre' 
import Portifolio from '../pages/Portifolio/Portifolio'
import Comentarios from '../pages/Comentarios/Comentarios'
import Menu from '../components/Menu/Menu'
import Footer from '../components/Footer/Footer'
import Contatos from '../pages/Contatos/Contatos'


function ApplicationRoutes(){
return(
    <BrowserRouter>
    <Menu /> 
    <Routes> 
        <Route path="/" element={<Sobre/>} />
        <Route path="portifolio" element={<Portifolio />} />
        <Route path="comentarios" element={<Comentarios />} />
        <Route path="contatos" element={<Contatos />} />
    </Routes>
    <Footer/>
    </BrowserRouter>

)
}

/*Pasta incial path é o caminho do navegador e element a pag que carrega*/ 

export default ApplicationRoutes