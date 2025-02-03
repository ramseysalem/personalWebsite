import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Hero.module.css"; 

export const Hero = () => {
    return ( 
    <section className = {styles.container}>
        <div className = {styles.content}>
            <h1 className = {styles.title}>Hi, I am Ramsey.</h1>
            <p className = {styles.desciption}>I am a student at northeastern university studying computer science, and this is my personal webiste!
                Reach out to me if you would like to connect!
            </p>
            <a href="mailto:ramseysalem2@gmail.com" className = {styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("react-portfolio/assets/hero/heroImage.png")} alt="Hero Image of me" className = {styles.heroImg}/>
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};


