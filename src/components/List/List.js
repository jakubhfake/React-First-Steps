import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/ColumnContainer';
import { settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';

class List extends React.Component {
  
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    columns: PropTypes.array.isRequired,
    addColumn: PropTypes.func,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  render() {
    const {title, image, description, columns, addColumn} = this.props;
    return (
      
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} titleImg={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData}/>
            ))}
          </div>
          <div className={styles.creator}>
            <Creator
              text={settings.columnCreatorText}
              action={addColumn}
            />
          </div>
        
        </section>
      </Container>
    );
  }
}

export default List;
