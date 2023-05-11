import { css } from '@fluentui/react';
import styles from './cards.module.scss';

const Cards = ({ cardCount, reflowOption }) => {

  const getOptionStyle = () => {
    switch(reflowOption) {
      case 'Static':
        return undefined;
      case 'Dynamic':
        return styles.cardGrowOne;
      case 'Controlled':
        return '';
    }
  }

  const _cardTemplate = () => {
    const cardArray = [];
    for (let i = 0; i < cardCount; i++) {
      cardArray.push(
        <div key={`card-${i}`} className={css(styles.cardRoot, getOptionStyle())}>
          <strong>{i + 1}</strong>
        </div>
      )
    }
    return cardArray
  }

  return (
    <div className={styles.cardContainer}>{_cardTemplate()}</div>
  )
}

export default Cards;