import '../../style.css'
import Logo from '../../Images/logo.png'

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="Logo"/>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" id='nav-link' href="#">Sobre Nós</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id='nav-link' href="#">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id='nav-link' href="#">Para Empresas</a>
              </li>
            </ul>
            <a href="/login"><button type="button" class="btn btn-warning" id='login'>Login</button></a>
          </div>
        </div>
      </nav>
    </>
  );
} 

export default Header;
