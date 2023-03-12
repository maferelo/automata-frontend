import { MainTouchable, TitleText } from "./styles";
import { ButtonProps } from "./types";

/**
 * Button Component
 * @param title - The button content
 * @param onPress
 * @return
 */
export function Button({ onPress, title, type }: ButtonProps): JSX.Element {
  return (
    <MainTouchable onPress={onPress} type={type}>
      <TitleText>{title}</TitleText>
    </MainTouchable>
  );
}
