import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import image1 from "../assets/images/1.jpeg";
import image2 from "../assets/images/2.jpeg";
import image3 from "../assets/images/3.jpeg";
import image4 from "../assets/images/4.jpeg";

const About = () => {
  return (
    <div id="about" className={Style.About}>
      <div className={Style.cardMenu}>
        <div className={Style.firstcard}>
          <div className={Style.firstCardImage1}>
            <div>
              <Image className={Style.Image1} src={image1} height={150} />
            </div>
            <div>
              <p style={{ padding: "1rem" }}>
                The interactive nature of STEMkit is another standout feature.
                The platform encourages collaboration, allowing students to work
                together on projets.
              </p>
            </div>
          </div>
          <div className={Style.firstCardImage1}>
            <div>
              <Image className={Style.Image1} src={image2} height={120} />
            </div>
            <div>
              <p style={{ padding: "1rem" }}>
                IoT enhances teamwork by fostering seamless communication,
                real-time data sharing, and collaborative problem-solving and
                efficient work environment.
              </p>
            </div>
          </div>
        </div>
        <div className={Style.secondCard}>
          <div className={Style.firstCardImage2}>
            <div>
              <Image className={Style.Image1} src={image3} height={120} />
            </div>
            <div>
              <p style={{ padding: "1rem" }}>
                Embracing IoT in my home has turned daily routines into seamless
                experiences
              </p>
            </div>
          </div>
          <div className={Style.firstCardImage2}>
            <div>
              <Image className={Style.Image1} src={image4} height={120} />
            </div>
            <div>
              <p style={{ padding: "1rem" }}>
                Embracing IoT is not just an investment in the present; it's a
                strategic move to become future-ready.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={Style.aboutVideo}></div>
    </div>
  );
};

export default About;
