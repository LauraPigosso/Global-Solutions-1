import 'bootstrap/dist/css/bootstrap.min.css';

export default function Step({ number, text }) {
 
    return (
    <div className="d-flex align-items-center p-3 mb-3 bg-light rounded shadow-sm">
      <div className="fw-bold fs-1 rounded d-flex justify-content-center align-items-center">
        {number}
      </div>

      <p className="mb-0 ms-3 fw-medium fs-6"> {text} </p>
    </div>
  );
}