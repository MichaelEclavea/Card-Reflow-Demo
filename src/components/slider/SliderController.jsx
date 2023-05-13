import { useEffect } from 'react';
import { Slider } from '@fluentui/react/lib/Slider';
import { Stack } from '@fluentui/react/lib/Stack';
import { Label } from '@fluentui/react/lib/Label';
import styles from './sliderController.module.scss';

export const SliderController = ({ ariaValue, changeHandler, valueFormat }) => {
  let windowSize = window.innerWidth;

  useEffect(() => {
    if (windowSize !== window.innerWidth) {
      windowSize = window.innerWidth;
    }
    return () => windowSize = null;
  }, [window.innerWidth])

  return (
    <div>
      <Label>
        <Stack horizontal verticalAlign='left'>
          <strong>Container width adjuster&nbsp;&nbsp;</strong>
        </Stack>
      </Label>
      <Slider
        className={styles.sliderControl}
        max={100}
        min={windowSize > 640 ? 7 : 20}
        defaultValue={100}
        ariaValueText={ariaValue}
        valueFormat={valueFormat}
        onChange={changeHandler}
        showValue
      />
    </div>
  )
}