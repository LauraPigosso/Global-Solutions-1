import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../../styles/header.css';

import logo_nome from '../../../public/Logo-Nome.png'


export default function Footer() {
  return (
    <footer className="py-3 bg-light border-top">
      <div className="container d-flex justify-content-between align-items-center flex-wrap">

        <div className="d-flex align-items-center gap-2 mb-2 mb-md-0">

          <img
            src={logo_nome}
            alt="icone da Proxima Parada com o nome do projeto ao lado. O icone é um livro aberto com setas saindo do meio do livro"
            style={{ width: "30%", height: "30%" }}
          />

          <span className="text-muted fs-6">
            Todos os direitos reservados
          </span>

        </div>

        <div className="d-flex gap-3">
          <a href="#" className="text-secondary fs-5">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="text-secondary fs-5">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" className="text-secondary fs-5">
            <i className="bi bi-twitter"></i> 
          </a>
        </div>

      </div>
    </footer>
  );
}
