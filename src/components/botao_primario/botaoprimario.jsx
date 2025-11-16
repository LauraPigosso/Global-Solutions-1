import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/botaoprimario.css';

function Botaoprimario({ text, onClick }) {
  return (
    <button className='botaoprimario btn btn-primary ps-4 pe-4' onClick={onClick}>
      {text}
    </button>
  );
}

export default Botaoprimario;

