import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [showMsg, setShowMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload
    setShowMsg(true);

    // auto hide after 3 seconds
    setTimeout(() => {
      setShowMsg(false);
    }, 3000);
  };

  return (
    <div className="page contact-bg">
      <span className="shape s1"></span>
      <span className="shape s2"></span>
      <span className="shape s3"></span>

      <form className="contact" onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        <input placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input placeholder="Phone" required />

        <button type="submit">Submit</button>

        {/* success message */}
        {showMsg && (
          <p className="success-msg">✅ Message sent successfully</p>
        )}
      </form>
    </div>
  );
}

export default Contact;
