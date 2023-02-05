import { Button } from "../common/Button";
import { ContainerView } from "./AddReminder.styles";
import { AddReminderProps } from "./AddReminder.types";

const TITLE = "Add Reminder";

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
      <Button
        onPress={handleAddReminderOnPress}
        label={TITLE}
        variant="primary"
      />
    </ContainerView>
  );
}
