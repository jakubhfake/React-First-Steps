import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import Hero from '../Hero/Hero.js';
import styles from './Faq.scss';
import { faqPageContent } from '../../data/dataStore.js';

class Faq extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }

  static defaultProps = {
    title: faqPageContent.title,
    image: faqPageContent.image,
    description: faqPageContent.description,
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

export default Faq;