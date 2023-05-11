import { useState } from 'react';

import { Options } from './components/options/Options';
import { Slider } from '@fluentui/react/lib/Slider';
import styles from './app.module.scss';
import Cards from './components/cards/Cards';

function App() {
  const [cardCount, setCardCount] = useState(6);
  const [reflowOption, setReflowOption] = useState(null);
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

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        This is using flexbox to manage card styling.
      </header>
      <div style={{ height: '100px', width: '100%', border: '1px solid black', display: 'flex' }}>
        <div>
          <Slider
            styles={{ root: { cursor: 'pointer' } }}
            label="Adjust cards container to trigger reflow"
            max={100}
            min={4}
            defaultValue={100}
            ariaValueText={sliderAriaValueText}
            valueFormat={sliderValueFormat}
            onChange={sliderOnChange}
            showValue
          />
        </div>
        <Options setReflowOption={handleOptionSelection}/>
      </div>
      <div className={styles.exampleContainer} style={{ width: `${sliderValue}%` }}>
        <Cards cardCount={cardCount} reflowOption={reflowOption} />
      </div>
    </div>
  );
}

export default App;
