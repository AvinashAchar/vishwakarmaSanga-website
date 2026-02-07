import "./Home.css";
import { useState, useEffect } from "react";

import img1 from "../images/slide1.png";
import img2 from "../images/slide2.png";
import img3 from "../images/slide3.png";

const images = [img1, img2, img3];

function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page home-bg home">
      
      {/* floating lights */}
      <span className="home-light l1"></span>
      <span className="home-light l2"></span>

      {/* LEFT TEXT */}
      <div className="home-text">
        <h1>ಶ್ರೀ ವಿಶ್ವಕರ್ಮ ಬ್ರಾಹ್ಮಣ ಸಮಾಜ ಸೇವಾ ಸಂಘ (ರಿ.)</h1>
        <p>
          ರಿ. ನಂಬ್ರ. 75/82-83 <br />
          ನೀರೆ ಬೈಲೂರು - 574102, ಕಾರ್ಕಳ ತಾಲೂಕು.
        </p>
      </div>

      {/* RIGHT SLIDER */}
      <div className="home-slider">
        <img src={images[index]} alt="slide" />
      </div>

    </div>
  );
}

export default Home;
