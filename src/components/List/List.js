import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js'
import {settings} from '../../data/dataStore';

class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        description: PropTypes.node.isRequired,
        image: PropTypes.string.isRequired,
        columns: PropTypes.array,

    }

    static defaultProps ={
        description: settings. defaultListDescription,
        
    }

 render() {
     return (
         <section className={styles.component}>
             <Hero titleText={this.props.title} titleImg={this.props.image}/>
             {this.props.description}
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