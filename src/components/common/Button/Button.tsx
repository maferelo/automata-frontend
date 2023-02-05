import { ButtonText, ButtonTouchableHighlight } from "./Button.styles";
import { ButtonProps } from "./Button.types";

/**
 * Button component.
 * @param onPress Function to handle button press.
 * @param title Button title.
 * @return Button component.
 */
export function Button({ onPress, label }: ButtonProps): JSX.Element {
  return (
    <ButtonTouchableHighlight onPress={onPress}>
      <ButtonText>{label}</ButtonText>
    </ButtonTouchableHighlight>
  );
}
