import React from 'react';
import styles from './Hero.scss';
import ReactHtlmParser from 'react-html-parser';
import PropTypes from 'prop-types';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{ReactHtlmParser(props.titleText)}</h2>
        <img src={props.titleImg} alt={"backgroung space"} className={styles.image}/>       
    </header>
);

Hero.propTypes = {
    titleText: PropTypes.node.isRequired,
    titleImg: PropTypes.string.isRequired,
};

export default Hero;