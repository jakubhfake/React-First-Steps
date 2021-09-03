import React from 'react';
import PropTypes from 'prop-types';
import styles from './Column.scss';
import Creator from '../Creator/Creator';
import Card from "../Card/Card";
import {settings} from '../../data/dataStore';

class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    };

    static propTypes = {
        title: PropTypes.node.isRequired,
    };

    addCard(title){
        console.log('this in column', this);
        this.setState(state => (
            {
                columns: [
                    {

                        cards: [
                        ...state.cards,
                        {
                            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                            title,
                        }
                        ]
                    }
                ]
            }
        ))
    }
    render() {
        return (
        <section className={styles.component}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <div>
                {this.state.cards.map(({key, ...cardsProps}) =>
                    <Card key={key} {...cardsProps}/> 
                )}
            </div>
            <div className={styles.creator}>
                <Creator
                    text={settings.cardCreatorText}
                    action={title => this.addCard(title)}
                />
            </div>       
        </section>
        )
    }
}
export default Column;