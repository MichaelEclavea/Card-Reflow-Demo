import { useState } from 'react';
import { Counter } from './components/counter/Counter';
import { Options } from './components/options/Options';
import { Slider } from '@fluentui/react/lib/Slider';
import styles from './app.module.scss';
import Cards from './components/cards/Cards';
import { Header } from './components/header/Header';
import { SliderController } from './components/slider/SliderController';

function App() {
  const [cardCount, setCardCount] = useState(5);
  const [reflowOption, setReflowOption] = useState('Static');
  const [sliderValue, setSliderValue] = useState(100);

  const sliderOnChange = (value) => {
    if (value >= 5) {
      setSliderValue(value);
    }
    return;
  };

  const handleOptionSelection = (choice) => {
    setReflowOption(choice);
  }

  const sliderAriaValueText = (value) => `${value} percent`;
  const sliderValueFormat = (value) => `${value}%`;

  const renderComponentPane = () => {
    return (
      <div className={styles.controlPane}>
        <div className={styles.paneHeader}>
          <strong>Demo Controls</strong>
        </div>
        <div className={styles.paneSection}>
          <SliderController ariaValue={sliderAriaValueText} valueFormat={sliderValueFormat} changeHandler={sliderOnChange} />
          <hr></hr>
        </div>
        <div className={styles.paneSection}>
          <Options setReflowOption={handleOptionSelection} />
        </div>
        <hr></hr>
        <div className={styles.paneSection}>
          <Counter cardCount={cardCount} setCardCount={setCardCount} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.appBody}>
        {renderComponentPane()}
        <div className={styles.exampleContainer} style={{ width: `${sliderValue}%` }}>
          <Cards cardCount={cardCount} reflowOption={reflowOption} />
        </div>
      </div>
    </div>
  );
}

export default App;
