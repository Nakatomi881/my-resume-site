import React from "react";
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar : React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <a href="https://www.linkedin.com/in/ryan-palmer-softwareengineerstudent/">
                <img src="/linkedin.png" alt="linkedIn" width={48} height={48} />
                </a>
            </div>
            <div className={styles.links}>
                <Link to="/" className={styles.link}>
                Resume
                </Link>
                <Link to="/projects" className={styles.link}>
                Projects
                </Link>
                <Link to="/contact" className={styles.link}>
                Contact
                </Link>
                <Link to="/about" className={styles.link}>
                About
                </Link>
            </div>
        </div>
    )
}

export default Navbar;