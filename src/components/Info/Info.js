import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container';
import styles from './Info.scss';
import Hero from '../Hero/Hero.js';
import {infoPageContent} from '../../data/dataStore.js';


class Info extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: infoPageContent.title,
    image: infoPageContent.image,
    description: infoPageContent.description,
  };

  render() {
    const {title, image, description} = this.props;
    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} titleImg={image}/>
          <div className={styles.description}>
            {description}
          </div>
        </section>
      </Container>
    );
  }
}
export default Info;