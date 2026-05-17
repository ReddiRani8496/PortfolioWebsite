function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <a href="#welcome">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <div className="footer-icons">
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
      </div>

      <p>© Reddirani. All rights reserved</p>
    </footer>
  );
}

export default Footer;
