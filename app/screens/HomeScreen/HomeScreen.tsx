import { useState } from "react";

import { AddReminder } from "../../components/AddReminder";
import { CreateReminderModal } from "../../components/CreateReminderModal";
import { ContainerView } from "./HomeScreen.styles";
import { HomeScreenProps } from "./HomeScreen.types";

/**
 * HomeScreen component.
 * @param navigation Navigation object.
 */
export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  const [isAddReminderOpen, setAddReminder] = useState(false);

  function handleAddReminderOnPress(): void {
    setAddReminder(true);
  }

  function handleConfirmOnPress(): void {
    setAddReminder(false);
  }

  function handleCancelOnPress(): void {
    setAddReminder(false);
  }

  return (
    <ContainerView>
      <AddReminder handleAddReminderOnPress={handleAddReminderOnPress} />
      <CreateReminderModal
        isOpen={isAddReminderOpen}
        handleConfirmOnPress={handleConfirmOnPress}
        handleCancelOnPress={handleCancelOnPress}
      />
    </ContainerView>
  );
}
