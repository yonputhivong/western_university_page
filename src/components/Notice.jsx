import { NavLink } from "react-router-dom";

export default function Notice() {
  return (
    <div
      className="alert alert-warning"
      style={{ borderLeft: "4px solid gold" }}
    >
      Ready to start? Go to <NavLink to="/admission">Admission</NavLink>.
    </div>
  );
}
