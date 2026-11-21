import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#173868",
      }}
    >
      <div className="container p-3 ">
        <p className="text-white ">
          ©Western Universit. Sample website for teaching.
        </p>
        <Link
          to="/contact"
          style={{ paddingRight: "4px", color: "white" }}
        >
          Contact Us
        </Link>
        <span style={{ color: "white", paddingRight: "4px" }}>|</span>
        <Link style={{ color: "white" }}>Apply now</Link>
      </div>
    </footer>
  );
}
