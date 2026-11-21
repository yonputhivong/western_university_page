import FeatureCard from "../components/FeatureCard";
import Hero from "../components/Hero";
import Notice from "../components/Notice";

export default function Home() {
  return (
    <div className="eceaea">
      <section>
        <Hero />
        <div className="container">
          <br />
          <br />
          <h2 style={{ color: "#163A70" }}>Why Western?</h2>

          <div className="row g-4">
            <div className="col-md-4">
              <FeatureCard
                title="Hand-on learning"
                text="Small class and real projects from the first semester."
              />
            </div>

            <div className="col-md-4">
              <FeatureCard
                title="Supportive community"
                text="Mentors, study groups, and student clubs."
              />
            </div>

            <div className="col-md-4">
              <FeatureCard
                title="Career ready"
                text="Internships with local employers."
              />
            </div>
          </div>
          <br />
          <br />

          <div className="container">
            <h2 style={{ color: "#163A70" }}>Key dates</h2>
            <ul>
              <li>Application open: January 15</li>
              <li>Open day: March 8</li>
              <li>Aplication deadline: June 30 </li>
            </ul>
            <br />
            <Notice />
          </div>
        </div>
        <br />
      </section>
    </div>
  );
}
