import React from "react";
import Styles from "./HomeLending.module.css";
import home1 from "../assets/images/home1.jpeg";
import home2 from "../assets/images/home2.jpeg";
import home3 from "../assets/images/home3.jpeg";
import Image from "next/image";

const HomeLending = () => {
  return (
    <>
      <div id="home" className={Styles.homeBanner}>
        <div className={Styles.homeContent}>
          <h1>Bhartiya Robotics</h1>
          <p style={{ fontWeight: "bold" }}>
            “ Let’s Fertilize the seeds of Bots”
          </p>
          <p style={{ marginTop: "1rem" }}>
            At [Your Company/Brand Name], we believe that learning should be an
            adventure, and what better way to make that journey engaging and
            impactful than through our STEM kits. Designed with a commitment to
            fostering curiosity and critical thinking, our kits empower learners
            of all ages to discover the wonders of STEM in a hands-on, immersive
            way.
          </p>
        </div>
        <div className={Styles.homeImage}>
          <div className={Styles.homePhoto}>
            <div className={Styles.home1}>
              <Image
                className={Styles.resImage}
                src={home1}
                height={150}
                width={150}
              />
            </div>
            <div>
              <Image
                className={Styles.resImage}
                src={home2}
                height={200}
                width={150}
              />
            </div>
          </div>
          <div className={Styles.homeSecondPhoto}>
            <Image src={home3} height={350} width={250} />
          </div>
        </div>
        <div className={Styles.resHomePhoto}>
          <div className={Styles.resPhotoHome2}>
            <div className={Styles.home1}>
              <Image
                // className={Styles.resImage}
                src={home1}
                height={150}
                width={150}
              />
            </div>
            <div>
              <Image
                // className={Styles.resImage}
                src={home2}
                height={150}
                width={150}
              />
            </div>
          </div>
          <div>
            <div>
              <Image
                className={Styles.resImage}
                src={home3}
                height={150}
                width={250}
              />
            </div>
          </div>
        </div>
        <div className={Styles.resImage2}>
          <div>
          <Image
                className={Styles.resImage23}
                src={home1}
                height={150}
                width={150}
              />
          </div>
          <div>
          <Image
                className={Styles.resImage23}
                src={home2}
                height={150}
                width={150}
              />
          </div>
          <div>
          <Image
                className={Styles.resImage23}
                src={home3}
                height={150}
                width={150}
              />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLending;
