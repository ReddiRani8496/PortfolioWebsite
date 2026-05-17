import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function GetInTouch() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = {
      from_name: form.current.name.value,
      from_email: form.current.email.value,
      message: form.current.message.value,
      to_name: "Reddirani",
      to_email: "reddiranibattuluri@gmail.com",
    };

    try {
      emailjs.init("d9S3KviL8RUz0h_u_");

      await emailjs.send("service_pkrtsj9", "template_pse9ak5", formData);

      alert("Your message has been sent!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      alert("Something went wrong!");
    }

    setLoading(false);
  };

  return (
    <section id="contact">
      <div className="contact-heading">
        <h1>Get in touch</h1>
        <p>Contact Me</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <i className="fa-regular fa-envelope"></i>

            <h3>Email</h3>

            <p>reddiranibattuluri@gmail.com</p>
          </div>

          <div className="contact-card">
            <i className="fa-solid fa-phone"></i>

            <h3>Phone</h3>

            <p>+91 8919830721</p>
          </div>
        </div>

        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />

          <input type="email" name="email" placeholder="Your email" required />

          <textarea
            name="message"
            placeholder="Type the message here"
            required
          ></textarea>

          <button type="submit" id="send-btn">
            {loading ? (
              "Sending..."
            ) : (
              <>
                Send
                <i className="fa-regular fa-paper-plane"></i>
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default GetInTouch;
