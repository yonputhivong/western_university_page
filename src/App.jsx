import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Program from "./pages/Program";
import Contact from "./pages/Contact";
import Admission from "./pages/Admission";

export default function App() {
  return (
    <div>
      <Navbar />

      {/* <main> */}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/program"
          element={<Program />}
        />
        <Route
          path="/admission"
          element={<Admission />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
      </Routes>
      {/* </main> */}
      <Footer />
    </div>
  );
}
