import React from "react";
import styles from './navbar.module.css'


const Navbar : React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <img src="/linkedin.png" alt="linkedIn" width={48} height={48} />
            </div>
            <div className={styles.links}>
                <link href="/" className={styles.link}>
                Resume
                </link>
                <link href="/" className={styles.link}>
                About
                </link>
                <link href="/" className={styles.link}>
                Contact
                </link>
            </div>
        </div>
    )
}

export default Navbar;