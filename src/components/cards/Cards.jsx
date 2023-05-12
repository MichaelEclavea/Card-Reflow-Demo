import { useEffect, useRef, useState } from 'react';
import { css } from '@fluentui/react/lib/Utilities';
import styles from './cards.module.scss';

const Cards = ({ cardCount, reflowOption }) => {
  const cardContainerRef = useRef();
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    if (reflowOption === 'Controlled') {
      _renderPlaceholderCards()
    } else {
      _renderCardList();
    }
  }, [reflowOption])

  useEffect(() => {
    _renderCardList()
  }, [cardCount])

  // Placeholder(invisible) cards when in controlled reflow.
  const _cardPlaceHolderGenerator = () => {
    return (
      <div className={styles.cardPlaceHolder} key={Math.floor(Math.random() * 100)} />
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

  const _renderCardList = () => {
    const cardArray = [];
    for (let i = 0; i < cardCount; i++) {
      cardArray.push(
        <div key={`card-${i}`} className={css(styles.cardRoot, reflowOption !== 'Static' && styles.cardGrowOne)}>
          <strong>{i + 1}</strong>
        </div>
      )
    }
    return setCardList(cardArray);
  }

  const _renderPlaceholderCards = () => {
    let placeholderArray = [];
    let placeholderCount = updateControlledCards();
    while (placeholderCount !== 0) {
      placeholderArray.push(_cardPlaceHolderGenerator());
      --placeholderCount;
    }

    return setCardList([...cardList, ...placeholderArray])
  }

  return (
    <div
      ref={cardContainerRef}
      className={styles.cardContainer}
    >
      {cardList}
    </div>
  )
}

export default Cards;