import "./Activity.css";
import { useState, useEffect } from "react";

import img1 from "../images/activity1.jpeg";
import img2 from "../images/activity2.jpeg";
import img3 from "../images/activity3.jpeg";
import img4 from "../images/activity4.jpeg";
import img5 from "../images/activity5.jpeg";
import img6 from "../images/activity6.jpeg";
import img7 from "../images/activity7.jpeg";
import img8 from "../images/activity8.jpeg";
import img9 from "../images/activity9.jpeg";
import img10 from "../images/activity10.jpeg";
import img11 from "../images/activity11.jpeg";
import img12 from "../images/activity12.jpeg";
import img13 from "../images/activity13.jpeg";
import img14 from "../images/activity14.jpeg";

const images = [
  img1, img2, img3, img4, img5, img6, img7,
  img8, img9, img10, img11, img12, img13, img14
];

function Activity() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page activity-bg">
      <div className="activity-wrapper">
        <div className="activity-slider">
          <img
            src={images[index]}
            alt="activity"
            className="activity-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Activity;
