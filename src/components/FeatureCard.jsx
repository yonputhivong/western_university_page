export default function FeatureCard({ title, text }) {
  return (
    <div className="card">
      <div
        className="card-body"
        style={{
          background: "white",
          width: "100%",
          minHeight: "140px",
          padding: "24px",
          borderRadius: "15px",
        }}
      >
        <h3
          style={{
            color: "#163A70",
            fontSize: "1.7rem",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            color: "#4b5563",
            margin: "0",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
