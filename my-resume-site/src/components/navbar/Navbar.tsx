import React from "react";
import styles from './navbar.module.css'


const Navbar : React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/ryan-palmer-softwareengineerstudent/">
                <img src="/linkedin.png" alt="linkedIn" width={48} height={48} />
                </a>
            </div>
            <div className={styles.links}>
                <a href="/" className={styles.link}>
                Resume
                </a>
                <a href="/" className={styles.link}>
                Projects
                </a>
                <a href="/" className={styles.link}>
                Contact
                </a>
                <a href="/" className={styles.link}>
                About
                </a>
            </div>
        </div>
    )
}

export default Navbar;