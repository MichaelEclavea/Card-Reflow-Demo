import { IconButton } from "@fluentui/react/lib/Button";

export const Counter = ({ cardCount, setCardCount }) => {
  return (
    <div>
      <IconButton iconProps={{ iconName: 'BoxSubtractSolid' }} onClick={() => setCardCount(cardCount - 1)} />
      <strong>{cardCount}</strong>
      <IconButton iconProps={{ iconName: 'BoxAdditionSolid' }} onClick={() => setCardCount(cardCount + 1)} />
    </div>
  )
}