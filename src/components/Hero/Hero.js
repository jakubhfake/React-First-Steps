import React from 'react';
import styles from './Hero.scss';
//import backgroundImg from './space';

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>Things to do</h2>
        <img src="https://i.postimg.cc/brCm2g7k/space.png" alt={"backgroung space"} className={styles.image}/>        
    </header>


);

export default Hero;