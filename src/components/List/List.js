import React from 'react';
import styles from './List.scss';
import Hero from "../Hero/Hero.js";
import PropTypes from "prop-types";
import Column from "../Column/Column.js";
import { settings, listData } from "../../data/dataStore";
import Creator from "../Creator/Creator";

class List extends React.Component {
  state = {
    columns: this.props.columns || [],
  };
  static propTypes = {
    title: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    image: PropTypes.string.isRequired,
  };

  static defaultProps = {
    description: settings.defaultListDescription,
  };

  addColumn(title) {
      console.log('this', this);
      this.setState(state => (
          {
              columns: [
                  ...state.columns,
                  {
                      key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                      title,
                      icon: 'list-alt',
                      cards: this.props.column,
                  }
              ]
          }
      ));
  }

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImg={this.props.image} />
        {this.props.description}
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps}/>
            
          ))}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => this.addColumn(title)}
          />
        </div>
        
      </section>
    );
  }
}

export default List;
