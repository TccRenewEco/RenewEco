import { Routes, Route} from 'react-router-dom'

import Homepage from './Pages/Homes/Home1';
import RestrictEmp from './Pages/Homes/Restrict_emp';
import RestrictUsu from './Pages/Homes/Restrict_usu'
import LogUsu from './Pages/Login/Login'
import CadastroCli from './Pages/Cadastro/CadastroCli';
import CadastroEmp from './Pages/Cadastro/CadastroEmp';
import Recuperacao from './Pages/Login/Recuperacao';

function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/empresa' element={<RestrictEmp/>} />
            <Route path='/cliente' element={<RestrictUsu/>} />
            <Route path='/cadastro/cliente' element={<CadastroCli/>} />
            <Route path='/cadastro/empresa' element={<CadastroEmp/>} />
            <Route path='/login' element={<LogUsu/>} />
            <Route path='/recuperacao' element={<Recuperacao/>} />
        </Routes>
    )
};

export default Rotas;