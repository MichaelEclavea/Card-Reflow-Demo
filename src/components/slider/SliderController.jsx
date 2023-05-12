import { Slider } from '@fluentui/react/lib/Slider';
import { Stack } from '@fluentui/react/lib/Stack';
import { Label } from '@fluentui/react/lib/Label';
import styles from './sliderController.module.scss';

export const SliderController = ({ ariaValue, changeHandler, valueFormat }) => {
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
        min={5}
        step={5}
        defaultValue={100}
        ariaValueText={ariaValue}
        valueFormat={valueFormat}
        onChange={changeHandler}
        showValue
      />
    </div>
  )
}