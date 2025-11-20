import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/botaoprimario.css';

function Botaoprimario({ text }) {
  return (
    <button
      className="botaoprimario texto-responsivo btn btn-primary fs-5 ps-4 pe-4"
      onClick={() => window.location.href = "https://r3vmarcos.github.io/fiap_gs_careers/carreer_vocacional.html"}
    >
      {text}
    </button>
  );
}

export default Botaoprimario;
