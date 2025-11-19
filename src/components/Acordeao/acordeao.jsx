import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../../styles/acordeao.css';


export default function Accordion({ id, titulo, texto }) {
  return (

    <div className="acordeao accordion-item my-3 ">

      <h2 className="accordion-header">

        <button
          className="fs-4 accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#${id}`}
        >
          {titulo}
        </button>

      </h2>

      <div id={id} className="texto-responsivo accordion-collapse collapse fs-4 " data-bs-parent="#accordionExample">
        <p className=" texto-responsivo accordion-body"> {texto} </p>
      </div>

    </div>
  );
}
