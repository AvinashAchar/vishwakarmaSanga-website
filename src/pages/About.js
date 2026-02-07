import "./About.css";
import devi from "../images/devi.png";

function About() {
  return (
    <div className="page about-bg about">

      {/* LEFT TEXT */}
      <div className="about-text">
        <h1 className="about-title"> ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ಬ್ರಾಹ್ಮಣ ಸಮಾಜ ಸೇವಾ ಸಂಘ (ರಿ.)</h1>

        <p className="about-mantra">
          🌸🌸🌸🌸🌸🌸🌸🌸🌸🌸
        </p>

        <h2 className="glow-text">
          ಓಂ ನಮೋ ವಿಶ್ವಕರ್ಮಣೀ ||<br/> 
          ಶ್ರೀ ಕಾಳಿಕಾಂಬೈ ನಮಃ ||
        </h2>
      </div>

      {/* RIGHT IMAGE */}
      <div className="about-image">
        <span className="image-glow"></span>
        <img src={devi} alt="devi" className="devi-ph" />
      </div>

    </div>
  );
}

export default About;
