const Contact = () => (
  <section id="contact" className="section">
    <div className="contact-wrapper">
      <h2 className="section-title">Contact</h2>

      <div className="contact-cards">
        <div className="card-soft form-card">
          <h3> hello 👋</h3>
          <form className="vstack gap-3 contact-form">
            <input className="form-control" placeholder="Your name" />
            <input className="form-control" type="email" placeholder="Your email" />
            <textarea className="form-control" rows="4" placeholder="Message" />
            <button className="btn btn-primary">Send</button>
          </form>
        </div>

        <div className="card-soft social-card">
          <p className="text-muted mb-2">Prefer social?</p>
          <a
            className="btn btn-outline-primary"
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noreferrer"
          >
            Follow on LinkedIn ↗
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
