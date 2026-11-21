import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark py-3"
        style={{
          backgroundColor: "#163A70",
          borderBottom: "1px solid #d1c9c9",
        }}
      >
        <div className="container">
          <h4
            className="text-white mb-0"
            style={{ fontFamily: "Georgia" }}
          >
            Western University
          </h4>
          <div className="d-flex gap-3">
            <NavLink
              NavLink
              to="/"
              end
              className="nav-link text-white"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid gold" : "none",
              })}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="nav-link text-white"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid gold" : "none",
              })}
            >
              About
            </NavLink>
            <NavLink
              to="/program"
              className="nav-link text-white"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid gold" : "none",
              })}
            >
              Program
            </NavLink>
            <NavLink
              to="/admission"
              className="nav-link text-white"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid gold" : "none",
              })}
            >
              Admission
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link text-white"
              style={({ isActive }) => ({
                borderBottom: isActive ? "2px solid gold" : "none",
              })}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
