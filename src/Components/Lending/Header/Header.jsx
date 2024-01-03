import React, { useState, useEffect } from "react";
import logo from "../assets/images/Bhartiya robo logo.jpg";
import Image from "next/image";
import styles from "./Header.module.css";
import { ImageLink, navLinkData } from "@/Constants";
// import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { Link } from "react-scroll";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY > 50) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", setFixed);
  });
  return (
    <div className={fix ? styles.fixedNavbar : styles.Header}>
      {ImageLink.map(({ _id, link }) => (
        <div className={styles.Logo}>
          <Link to={link}>
            <Image src={logo} height={70} width={100} />
          </Link>
        </div>
       ))} 
      <div className={styles.HeaderLink}>
        <ul>
          {navLinkData.map(({ _id, title, link }) => (
            <li key={_id}>
              <Link
                activeClass={styles.activeNav}
                to={link}
                smooth={true}
                duration={500}
                offset={-70}
                spy={true}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.btn}>
        <button type="button" style={{border: "2px solid rgba(82, 92, 235, 1)", color: "#000"}} >Buy</button>
        <button type="button" style={{background: 'rgba(82, 92, 235, 1)'}}>SignUp</button>
      </div>
      <div className={styles.desktopMenu}>
        <span onClick={() => setShowMenu(!showMenu)} className={styles.navMenu}>
          <FiMenu />
        </span>
      </div>
      {/* </div> */}
      {showMenu && (
        <div className={styles.mobileMenu}>
          <div className={styles.mobileMenuShow}>
            <div className={styles.mobileLogo}>
              {ImageLink.map(({ _id, link }) => (
                <div key={_id}>
                  <Link to={link}>
                    <Image src={logo} height={100} width={150} />
                  </Link>
                  <div className={styles.mobileContent}>
                    <p>BHARATIYA ROBOTICS</p>
                    <p>Let’s Fertilize the seeds of Bots</p>
                  </div>
                </div>
              ))}
              <div className={styles.mobileClose}>
                <span
                  onClick={() => setShowMenu(false)}
                  className={styles.navCloseMenu}
                >
                  <MdClose />
                </span>
              </div>
            </div>
            <div className={styles.mobileNavlink}>
              <ul>
                {navLinkData.map(({ _id, title, link }) => (
                  <li key={_id}>
                    <Link
                      to={link}
                      onClick={() => setShowMenu(false)}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      spy={true}
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
