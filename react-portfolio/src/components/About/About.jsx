import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import aboutImage from "/assets/about/ramseyCali.png?url";
import cursorIcon from "/assets/about/cursorIcon.png?url";
import serverIcon from "/assets/about/serverIcon.png?url";
import uiIcon from "/assets/about/uiIcon.png?url";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Eningeering Intern</h3>
              <p>
              I was a data engineer intern for delta solutions, a startup in Central Massachusetts. 
              I managed databases, secured important information, optimized workflows, and automated 
              weekly emails to clients and investors.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Knack Tutor</h3>
              <p>
              I am currently a knack tutor, I tutor students in fundementals of data science, and 
              one of my favorite classes, Algorithms and data structures.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Outdoor Operations</h3>
              <p>
              Outdoor operations employee of the pretegious Pleasant Valley Country Club, 
              in Sutton MA. Cleaned members clubs, valet service, and worked in the cart barn. 
              Fostered great relationships with the members. 
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};