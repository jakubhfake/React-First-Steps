import React from 'react';
import styles from './Hero.scss';
//import backgroundImg from '../../space.png';
import PropTypes from 'prop-types';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img src={props.titleImg} alt={"backgroung space"} className={styles.image}/>       
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    titleImg: PropTypes.string.isRequired,
};

export default Hero;