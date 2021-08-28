import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'

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
             <div className={styles.columns}>
                 <Column titleText={'Animal'}></Column>
                 <Column titleText={'Plants'}></Column>
                 <Column titleText={'Minerals'}></Column>
             </div>
         </section>
     )
 }
}

export default List