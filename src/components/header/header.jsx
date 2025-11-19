import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import '../../styles/header.css';

import logo_icone from '../../../public/Logo-icone.png'

import Botaoprimario from '../botao_primario/botaoprimario';

function Header() {
  return (
    <header className="header container-fluid py-3 shadow-sm bg-white">
      <nav className="navbar navbar-expand-lg container">

        <a className="navbar-brand d-none d-lg-block" href="#inicio">
          <img
            src={logo_icone}  
            alt="Logotipo da Proxíma Jornada. A logo é um icone de um livro aberto com setas saindo do meio do livro"
            className="img-fluid"
            style={{ height: "50px" }} 
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          aria-controls="menu"
          aria-expanded="false"
          aria-label="Menu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="menu">

          <ul className="navbar-nav mx-auto gap-3 align-items-lg-center mt-3 mt-lg-0">

            <li className="nav-item">
              <a className="nav-link link" href="#inicio">Início</a>
            </li>

            <li className="nav-item">
              <a className="nav-link link" href="#Instrucoes">Instruções</a>
            </li>

            <li className="nav-item">
              <a className="nav-link link" href="#Dados">Dados do mercado</a>
            </li>

            <li className="nav-item">
              <a className="nav-link link" href="#Sobre">Sobre nossa solução</a>
            </li>
          </ul>
        </div>
        
        <div className="ms-lg-4 mt-3 mt-lg-0">
          <Botaoprimario text="Faça o teste" />
        </div>

      </nav>
    </header>
  );
}

export default Header;
