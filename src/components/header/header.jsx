import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/header.css';

import Botaoprimario from '../botao_primario/botaoprimario';

function Header() {

  return (
    <header className="header container-fluid py-3 shadow-sm bg-white">
      <div className="container d-flex align-items-center justify-content-between">

        <h2 className="fw-bold m-0">Logotipo</h2>

        <nav>
          <ul className="nav gap-4">
            <li className="nav-item">
              <a className="link nav-link" href="#">Início</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link" href="#">Sobre o teste</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link" href="#">Depoimentos</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link" href="#">Section 4</a>
            </li>
            <li className="nav-item">
              <a className="link nav-link" href="#">Section 5</a>
            </li>
          </ul>
        </nav>

        <Botaoprimario text="Faça o teste"/>

      </div>
    </header>
  );
}

export default Header;
