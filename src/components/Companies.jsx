import companyLogo from "../assets/iqg-new-logo.png";

function Companies() {
  return (
    <section id="companies">
      <div className="skills-header">
        <h1>Companies</h1>
        <p>Remarkable Companies I have worked with</p>
      </div>

      <div className="company-container">
        <img src={companyLogo} alt="iqGateway" className="company-icon" />
      </div>
    </section>
  );
}

export default Companies;
