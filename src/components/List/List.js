import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
        img: PropTypes.string.isRequired,
    }

    static defaultProps ={
        children: <p>I can do all things!!!</p>
    }

 render() {
     return (
         <section className={styles.component}>
             <Hero titleText={this.props.title} titleImg={this.props.img}/>
             {this.props.children}
         </section>
     )
 }
}

export default List