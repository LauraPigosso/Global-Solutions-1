import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/card.css';

export default function CardBox({ icon, title, description, descricaoicone, source, link }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card shadow-sm p-3 rounded-4">
        
        <div className="d-flex align-items-center gap-2 mb-3">
          <img 
            src={icon} 
            alt={descricaoicone + " icon"} 
            className="img-fluid" 
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
          <h6 className="card-titulo fw-bold text-center mb-0">{title}</h6>
        </div>
        <p className="mb-3 fs-4">{description}</p>
        <a className="link nav-link" href={link}>{source}</a>
      </div>
    </div>
  );
}
