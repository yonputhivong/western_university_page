import FeatureCard from "../components/FeatureCard";

export default function Program() {
  return (
    <div className="eceaea">
      <div
        className="container"
        style={{ backgroundColor: "#eceaea" }}
      >
        <br />
        <br />

        <h1 style={{ color: "#163A70" }}>Programs</h1>
        <br />
        <div className="row g-4">
          <div className="col md-4">
            <FeatureCard
              title="Technology"
              text="Computer Science, web development, and networking."
            />
          </div>
          <div className="col-md-4">
            <FeatureCard
              title="Design"
              text="UX/UI designs, graphic design and digital media."
            />
          </div>
          <div className="col-md-4">
            <FeatureCard
              title="Business"
              text="Management marketing and entrepreneurship."
            />
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
