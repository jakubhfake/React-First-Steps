import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
//import Creator from '../Creator/Creator';
import Card from '../Card/Card';
//import {settings} from '../../data/dataStore';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    

    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.node.isRequired,
      icon: PropTypes.node.isRequired,
    };

    
    render() {
      const {title, icon, cards} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>{title}
            <span className={styles.icon}>
              <Icon name={icon}/>
            </span>
          </h3>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData}/>
          ))}
      
            
          {/*<div className={styles.creator}>
            <Creator
              text={settings.cardCreatorText}
              action={title => this.addCard(title)}
            />
          </div>        */}
        </section>
      );
    }
}
export default Column;