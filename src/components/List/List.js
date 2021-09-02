import React from "react";
import styles from "./List.scss";
import Hero from "../Hero/Hero.js";
import PropTypes from "prop-types";
import Column from "../Column/Column.js";
import { settings } from "../../data/dataStore";
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
      this.setState(state => (
          {
              columns: [
                  ...state.columns,
                  {
                      key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
                      title,
                      icon: 'list-alt',
                      cards: []
                  }
              ]
          }
      ));
  }

  /* Nie stosuj tej składni, jest tylko do wyjaśnienia tego co wyżej :)

  addColumn(title){
      this.setState(function(currentState){
         //create new column object with properties
         let newColumn = {
             key: state.columns.length ? state.columns[state.columns.length-1].key+1 : 0,
             title,
             icon: 'list-alt',
             cards: [],
         };
         // create copy of curent state
         let newState = Array.from(currentState);

         //add new column to new state
         newState.columns.push(newColumn);

         //return new state
         return newState;
      });
  }

  */

  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} titleImg={this.props.image} />
        {this.props.description}
        <div className={styles.columns}>
          {this.state.columns.map(({ key, ...columnProps }) => (
            <Column key={key} {...columnProps} />
          ))}

          {/* function(singleColumn) {
                    const key = cingleColumn.key;
                    const columnProps = {};

                    for(let propName in singleColumn) {
                        if(propName != 'key') {
                            columnProps[propName] = singleColumn[propName];
                        }
                    }
                    return <Column key={key} {...columnProps} /></Column>
                } */}
          {/* możemy użyć 'spread operator'
                function(singleColumn) {
                    {key, ...columnProps} = singleColumn;
                    return <Column key={key} ...{columnProps}/>
                    Jednak skoro używamy arcumentu singleColumn tylko raz  to możemy go
                    nie nazywać tylko od razu w deklaracji funkcji użyć wyrażenia:
                    {key, ...columnProps}
                    

                    tą funkcję możemy zamienić na funkcję strzałkową i otrzymamy to co w metodzie .map
                } */}
        </div>
        <div className={styles.creator}>
          <Creator
            text={settings.columnCreatorText}
            action={title => this.addColumn(title)}
          />
          {/* <Creator text={settings.columnCreatorText} action={this.addColumn, console.log('czym jest this', this)}/> */}
        </div>
        
      </section>
    );
  }
}

export default List;
