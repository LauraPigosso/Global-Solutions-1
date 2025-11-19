import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../styles/header.css';

import logo_icone from '../../../public/Logo-icone.png'
import Botaoprimario from '../botao_primario/botaoprimario';

function Header() {
  return (
    <header className="header container-fluid shadow-sm">
      <nav className="navbar navbar-expand-lg container d-flex align-items-center justify-content-between">

        <div className="d-flex d-lg-none align-items-center w-100 position-relative">

          {/* Botão menu (esquerda) */}
          <button
            className="navbar-toggler position-absolute start-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#menu"
            aria-controls="menu"
            aria-expanded="false"
            aria-label="Menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Logo no mobile */}
          <a className="navbar-brand mx-auto" href="#inicio">
            <img
              src={logo_icone}
              alt="Logotipo da Próxima Jornada"
              className="img-fluid"
              style={{ height: "40%" }}
            />
          </a>
        </div>

        {/* DESKTOP: LOGO */}
        <a className="navbar-brand d-none d-lg-block" href="#inicio">
          <img
            src={logo_icone}
            alt="Logotipo da Próxima Jornada"
            className="img-fluid"
            style={{ height: "80px" }}
          />
        </a>

        {/* NAVIGATION */}
        <div className="collapse navbar-collapse justify-content-center" id="menu">

          <ul className="navbar-nav gap-3 align-items-lg-center text-start">

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

            {/* BOTÃO NO MENU (MOBILE) */}
            <li className="nav-item d-lg-none mt-3">
              <Botaoprimario text="Faça o teste" />
            </li>
          </ul>
        </div>

        {/* BOTÃO NO DESKTOP */}
        <div className="d-none d-lg-block ms-lg-auto">
          <Botaoprimario text="Faça o teste" />
        </div>

      </nav>
    </header>
  );
}

export default Header;
