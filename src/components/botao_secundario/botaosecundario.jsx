import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/botaosecundario.css';

function Botaosecundario({ text, onClick }) {
  return (
    <button className='botaosecundario texto-responsivo btn btn-outline-primary fs-5 ps-4 pe-4' onClick={onClick}>
      {text}
    </button>
  );
}

export default Botaosecundario;
