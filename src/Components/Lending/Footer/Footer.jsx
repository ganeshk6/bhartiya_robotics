// import Link from "next/link";
import React from "react";
import footerLogo from "../assets/images/only_logo_without_bg.png";
import styles from "./Footer.module.css";
import { ImageLink, navLinkData } from "@/Constants";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <>
      <div className={styles.Footer}>
        <div className={styles.footerContactDetails}>
          <div>
            <p>Contact us:-</p>
          </div>
          <div className={styles.footerAddress}>
            <div>
              <p>
                <span>
                  <a href="">
                    <MdCall />
                  </a>
                </span>
                +91 1234567890
              </p>
            </div>
            <div>
              <p>
                <span>
                  <a href="">
                    <SiGmail />
                  </a>
                </span>
                info@bhartiyarobotic.com
              </p>
            </div>
            <div>
              <p>
                <span>
                  <a href="">
                    <SiGmail />
                  </a>
                </span>
                info@bhartiyarobotic.com
              </p>
            </div>
          </div>
        </div>
        <div className={styles.footerContact}>
          <div className={styles.footerInput}>
            <input type="text" placeholder="Say Hello!..." />
          </div>
          <div className={styles.footerButton}>
            <button type="button">connect</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
