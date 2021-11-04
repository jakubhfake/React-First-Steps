import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
// import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import { settings } from '../../data/dataStore';
import Container from '../Container/Container';
// import { settings } from '../../data/dataStore';

const SearchResults = ({cards, title, icon}) => (
  
  <Container>
    <section className={styles.component}>
    
      <h3 className={styles.title}>{title}
        <span className={styles.icon}>
          <Icon name={icon}/>
        </span>
      </h3>
      {cards.map(cardData => (
        <Card key={cardData.id} {...cardData}/>
      ))}
    
    </section>
  </Container>
);

SearchResults.defaultProps = {
  title: 'Search Results',
  icon: settings.defaultColumnIcon,

};

SearchResults.propTypes = {
  title: PropTypes.node,
  icon: PropTypes.node,
  cards: PropTypes.array,

};

export default SearchResults;