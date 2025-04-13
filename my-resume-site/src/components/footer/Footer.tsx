import React from "react";
import styles from './footer.module.css'
import { Link } from 'react-router-dom'

const Footer: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftsideSaying}>
            <p>come this way and that way this will be the way and that will be the way</p>
            <p>come this way and that way this will be the way and that will be the way</p>
            <p>come this way and that way this will be the way and that will be the way</p>
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


export default Footer;