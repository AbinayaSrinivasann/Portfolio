import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    // Send form data to FormSubmit
    await fetch("https://formsubmit.co/abinayasrinivasan196@gmail.com", {
      method: "POST",
      body: formData,
    });

    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="contact" className="section">
      <div className="contact-wrapper">
        <h2 className="section-title">Contact</h2>

        <div className="contact-cards">
          {/* Contact Form */}
          <div className="card-soft form-card">
            <h3> hello 👋</h3>
            {submitted ? (
              <p className="alert alert-success">
                ✅ Your message has been received. Thank you!
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="vstack gap-3 contact-form"
              >
                {/* Hidden fields for FormSubmit */}
                <input type="hidden" name="_captcha" value="false" />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Contact Form Submission!"
                />

                <input
                  className="form-control"
                  name="name"
                  placeholder="Your name"
                  required
                />
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="Your email"
                  required
                />
                <textarea
                  className="form-control"
                  rows="4"
                  name="message"
                  placeholder="Message"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </form>
            )}
          </div>

          {/* Social Card */}
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
};

export default Contact;
