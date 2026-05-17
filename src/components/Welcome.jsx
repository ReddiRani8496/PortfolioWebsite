import profile from "../assets/photo.png";

function Welcome() {
  return (
    <section id="welcome" className="welcome-section">
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/reddirani/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>

        <a
          href="https://github.com/ReddiRani8496"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github"></i>
        </a>

        <a href="tel:8919830721" rel="noreferrer">
          <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      <div className="personal-details">
        <h1 className="name">Reddirani</h1>

        <h2 className="role">Front End Developer</h2>

        <a href="#contact">
          <button className="hello-button">
            Say Hello
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </a>
      </div>

      <div>
        <img src={profile} alt="profile" className="photo-welcome" />
      </div>
    </section>
  );
}

export default Welcome;
