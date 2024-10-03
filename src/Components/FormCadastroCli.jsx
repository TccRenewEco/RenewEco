import React from "react";
import '../style.css';
import Logo from '../Images/logo.png'

function FormCadastroCli(){
    return(
    <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src={Logo} alt=""/>
            <h1 className="h3 mb-3 fw-normal">Criar Conta</h1>

            <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
            <input type="password1" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Senha</label>
            </div>
            <div className="form-floating">
            <input type="password2" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Confirmar Senha</label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Registrar</button>
            <div className="login-links mt-5">
                <a href="/cadastro/empresa" className="mx-3">Criar Conta para Empresa</a>
                <a href="/login" className="mx-3">Entrar em Conta Existente</a>
            </div>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2024</p>
        </form>
    </div>
    )
}


export default FormCadastroCli;