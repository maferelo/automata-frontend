import { AddPressable, AddText, ContainerView } from "./AddReminder.styles";
import { AddReminderProps } from "./AddReminder.types";

const TEXT = "Add Reminder";

/**
 * AddReminder component.
 * @param handleAddReminderOnPress Function to handle add reminder press.
 * @return AddReminder component.
 */
export function AddReminder({
  handleAddReminderOnPress,
}: AddReminderProps): JSX.Element {
  return (
    <ContainerView>
      <AddPressable onPress={handleAddReminderOnPress}>
        <AddText>{TEXT}</AddText>
      </AddPressable>
    </ContainerView>
  );
}
