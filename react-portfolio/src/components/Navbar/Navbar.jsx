import React, {useState} from "react"; 
import {getImageUrl} from "../../utils";
import menuIcon from "/assets/menuIcon.png?url";
import closeIcon from "/assets/closeIcon.png?url";

import styles from "./Navbar.module.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); 
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href = "/">
            Portfolio
            </a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} 
            src={
                menuOpen 
                ? closeIcon
                : menuIcon
            } 
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
                <li>
                    <a href = "#about">About</a>
                </li>
                <li>
                    <a href = "#experience">Experience</a>
                </li>
                <li>
                    <a href = "#projects">Projects</a>
                </li>
                <li>
                    <a href = "#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>); 
};