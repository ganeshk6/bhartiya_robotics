import React from "react";
import Styles from "./Welcome.module.css";
import KitImage from "../assets/images/sensor.jpg";

const Kits = () => {
  return (
    <>
      <div id="home" className={Styles.homeBanner}>
        <div className={Styles.homeContent}>
          <p>
            <span className={Styles.welcome}>Welcome</span>
            TO the forefront of innovation, where technology meets ingenuity,
            and connectivity transforms possibilities. Our IoT business stands
            as a beacon of progress, dedicated to reshaping industries,
            enhancing lives, and propelling businesses into the future.
          </p>
          <p style={{ marginTop: "1rem" }}>
            At the heart of our business is the commitment to connect the
            unconnected. We are architects of a digital ecosystem where devices
            seamlessly communicate, empowering businesses and individuals with
            unprecedented control and insight. Through cutting-edge
            technologies, we weave a tapestry of connectivity that transcends
            boundaries.
            <div className={Styles.getStart}>
              <button type="button">GET STARTED!</button>
            </div>
          </p>
        </div>
      </div>
    </>
  );
};

export default Kits;
