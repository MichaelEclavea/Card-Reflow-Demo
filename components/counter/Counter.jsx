import { Stack } from '@fluentui/react/lib/Stack';
import { Label } from '@fluentui/react/lib/Label';
import { IconButton } from '@fluentui/react/lib/Button';

export const Counter = ({ cardCount, setCardCount }) => {
  return (
    <div>
      <Label>
        <Stack horizontal verticalAlign='left'>
          <strong>Card generator&nbsp;&nbsp;</strong>
        </Stack>
      </Label>
      <Stack tokens={{ childrenGap: 8 }} horizontal verticalAlign='center'>
        <IconButton iconProps={{ iconName: 'BoxSubtractSolid' }} onClick={() => setCardCount(cardCount - 1)} />
        <strong>{cardCount}</strong>
        <IconButton iconProps={{ iconName: 'BoxAdditionSolid' }} onClick={() => setCardCount(cardCount + 1)} />
      </Stack>
    </div>
  )
}