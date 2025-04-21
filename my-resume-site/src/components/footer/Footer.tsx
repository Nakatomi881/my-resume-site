import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footer_col1}>
        <h1 className={styles.footer_col1_title}>Ryan Palmer</h1>
        <div className={styles.missionstatement}>
          <p>
            I specialize in quality assurance and application development,
            focusing on both manual and automated testing to ensure software
            reliability and performance.
          </p>
        </div>
      </div>
      <div className={styles.footer_col2}>
        <h2 className={styles.heading}>Important Links</h2>

        <div className={styles.links}>
          <ul>
            <li>
              <Link to="/" className={styles.link}>
                Resume
              </Link>
            </li>
            <li>
              <Link to="/projects" className={styles.link}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={styles.link}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/about" className={styles.link}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_col3}>
        <div>
          <h2 className={styles.heading}>Contact Info</h2>
        </div>
        <div className={styles.email}>
          <ul>
            <li>Ryandanpalmer@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_col4}>
        <div>
          <h2 className={styles.heading}>Social Links</h2>
          <ul className={styles.sociallinks}>
            <li>
              <a
                href="https://www.linkedin.com/in/ryan-palmer-softwareengineerstudent/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
