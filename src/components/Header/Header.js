import React from 'react';
import PropTypes from 'prop-types';
import Container from '../Container/Container.js';
import {NavLink, Link} from 'react-router-dom';
import styles from './Header.scss';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore.js';

class Header extends React.Component {
    static propTypes = {
      icon: PropTypes.node.isRequired,
    }
    static defaultProps = {
      icon: settings.defautHeaderIcon,
    }
    render() {
      const {icon} = this.props;
      return (
        <header className={styles.component}>
          <Container>
            <div className={styles.wrapper}>
              <Link className={styles.logo} to={'/'}>
                <Icon name={icon}/>
              </Link>
              <nav>
                <NavLink exact to='/' activeClassName='active'>Home</NavLink>
                <NavLink exact to='/info' activeClassName='active'>Info</NavLink>
                <NavLink exact to='/FAQ' activeClassName='active'>FAQ</NavLink>
              </nav>
            </div>
          </Container>
        </header>
      );
    }
}

export default Header;