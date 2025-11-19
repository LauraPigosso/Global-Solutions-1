import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/botaoprimario.css';

function Botaoprimario({ text, onClick }) {
  return (
    <button className='botaoprimario texto-responsivo btn btn-primary fs-5 ps-4 pe-4' onClick={onClick}>
      {text}
    </button>
  );
}

export default Botaoprimario;

