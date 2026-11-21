export default function Contact() {
  return (
    <div className="eceaea">
      <div className="container ">
        <br />
        <br />
        <h1 style={{ color: "#163A70" }}>Contact</h1>
        <br />
        <form className="w-50 ">
          <div className="mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Your name"
            />
          </div>
          <textarea
            placeholder="Your message"
            class="form-control"
          ></textarea>

          <br />
          <button className="btn btn-warning w-100">Send</button>
        </form>
        <br />
        <br />
      </div>
    </div>
  );
}
