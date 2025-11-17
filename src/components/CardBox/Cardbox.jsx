import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardBox({ icon, title, description, source }) {
  return (
    <div className="col-12 col-md-6 col-lg-3 mb-4">
      <div className="card shadow-sm p-3 h-100 rounded-4">
        
        {/* Ícone + título */}
        <div className="d-flex align-items-center gap-2 mb-3">
          <img 
            src={icon} 
            alt={title + " icon"} 
            className="img-fluid" 
            style={{ width: "32px", height: "32px", objectFit: "contain" }}
          />
          <h6 className="fw-bold mb-0">{title}</h6>
        </div>

        {/* Texto */}
        <p className="mb-3">{description}</p>

        {/* Fonte */}
        <small className="text-primary fw-semibold">{source}</small>
      </div>
    </div>
  );
}
