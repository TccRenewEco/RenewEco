import React from "react";
import '../style.css';
import Logo from '../Images/logo.png'

function FormCli(){
    return(
    <div className="d-flex align-items-center text-center form-container">
        <form className="form-signin">
            <img className="mb-4" src={Logo} alt=""/>
            <h1 className="h3 mb-3 fw-normal">Login</h1>

            <div className="form-floating">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
            <label for="floatingInput">E-mail</label>
            </div>
            <div className="form-floating">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Senha</label>
            </div>

            <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
            <label className="form-check-label" for="flexCheckDefault">
                Salvar Informações
            </label>
            </div>
            <button className="btn btn-primary w-100 py-2" type="submit">Entrar</button>
            <div className="login-links mt-5">
                <a href="/recuperacao" className="mx-3">Esqueci Minha Senha</a>
                <a href="/cadastro/cliente" className="mx-3">Criar Conta</a>
            </div>
            <p className="mt-5 mb-3 text-body-secondary">&copy; 2024–2024</p>
        </form>
    </div>
    )
}


export default FormCli;