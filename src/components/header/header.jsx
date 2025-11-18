import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/header.css';

import Botaoprimario from '../botao_primario/botaoprimario';

function Header() {

  return (
    <header className="header container-fluid py-3 shadow-sm bg-white">
      <div className="container d-flex align-items-center justify-content-between">

        <h2 className="fw-bold m-0">Logotipo</h2>

        <nav className='Navegacao'>
          <ul className="nav gap-4">
            <li className="nav-item">
              <a className="link nav-link" href="#inicio">Início</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link" href="#Instrucoes">Instruções</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link" href="#Dados">Dados do mercado</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link" href="#Sobre">Sobre nossa solução</a>
            </li>
          </ul>
        </nav>

        <Botaoprimario text="Faça o teste"/>

      </div>
    </header>
  );
}

export default Header;
