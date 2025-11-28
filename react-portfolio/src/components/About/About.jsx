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
          alt="Me in Dana Point, California"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineering Co-op</h3>
              <p>
              Software engineering at Verisk, I worked on internal tools for the AQA dev team. 
              Specialzied in security enchancments with data - synthetic data generation, and deidentification. 
              The office was in downtown Boston, I loved the hyrbid work enviroment and working with other co-ops. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineering Intern</h3>
              <p>
              I was a data engineer intern for delta solutions, a small firm in Central Massachusetts. 
              I managed databases, secured important information, optimized workflows, and automated 
              weekly emails to clients and investors. 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiIcon} alt="UI icon" />
             <div className={styles.aboutItemText}>
              <h3>Knack Tutor</h3>
              <p>
              I am currently a knack tutor, I tutor students in fundementals of data science, and 
              one of my favorite classes, Algorithms and data structures.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};