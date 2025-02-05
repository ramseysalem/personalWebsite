import React from 'react';

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"; 
import heroImage from "/assets/hero/betterHero.png"

export const Hero = () => {
    return ( 
    <section className = {styles.container}>
        <div className = {styles.content}>
            <h1 className = {styles.title}>Hi, I am Ramsey.</h1>
            <p className = {styles.description}>I am a student at northeastern university studying computer science, and this is my personal webiste!
                Reach out to me if you would like to connect!
            </p>
            <a href="mailto:ramseysalem2@gmail.com" className = {styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImage} alt="Hero Image of me" className = {styles.heroImg}/>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
        </section>
    );
};


