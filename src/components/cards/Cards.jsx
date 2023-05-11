import { useEffect, useRef } from 'react';
import { css } from '@fluentui/react/lib/Utilities';
import styles from './cards.module.scss';

const Cards = ({ cardCount, reflowOption }) => {
  const cardContainerRef = useRef();

  // Listener for container ref size change.
  useEffect(() => {
    updateControlledCards();
  }, [cardContainerRef])

  // Placeholder(invisible) cards when in controlled reflow.
  const _cardPlaceHolder = () => {
    return (
      <div className={styles.cardPlaceHolder} />
    )
  }

  // Generates total placeholder cards needed.
  const divisibleGenerator = (totalCount, maxCountInRow) => {
    const maxCardCount = totalCount + (maxCountInRow - totalCount % maxCountInRow) % maxCountInRow;
    return maxCardCount - totalCount;
  }

  const updateControlledCards = () => {
    const cardArea = 240 + 12; // Single card (flex-basis) + (left & right margins).
    const containerWidth = Math.floor(cardContainerRef.current.offsetWidth);
    const maxCardsInRow = Math.floor(containerWidth / cardArea);
    const placeholderCount = divisibleGenerator(cardCount, maxCardsInRow);

    return placeholderCount;
  }

  const _cardTemplate = () => {
    const cardArray = [];
    for (let i = 0; i < cardCount; i++) {
      cardArray.push(
        <div key={`card-${i}`} className={css(styles.cardRoot, reflowOption !== 'Static' && styles.cardGrowOne)}>
          <strong>{i + 1}</strong>
        </div>
      )
    }
    if (reflowOption === 'Controlled') {
      let placeholderCount = updateControlledCards();
      while (placeholderCount !== 0) {
        cardArray.push(_cardPlaceHolder());
        --placeholderCount;
      }
    }
    return cardArray
  }

  return (
    <div
      ref={cardContainerRef}
      className={styles.cardContainer}
    >
      {_cardTemplate()}
    </div>
  )
}

export default Cards;