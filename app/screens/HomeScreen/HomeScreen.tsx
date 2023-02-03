import { useState } from "react";

import { AddReminder } from "../../components/AddReminder";
import { ContainerView } from "./HomeScreen.styles";
import { HomeScreenProps } from "./HomeScreen.types";

/**
 * HomeScreen component.
 * @param navigation Navigation object.
 */
export function HomeScreen({ navigation }: HomeScreenProps): JSX.Element {
  const [showAddReminderModal, setShowAddReminderModal] = useState(false);

  function handleAddReminderOnPress(): void {
    setShowAddReminderModal(true);
  }

  return (
    <ContainerView>
      <AddReminder handleAddReminderOnPress={handleAddReminderOnPress} />
    </ContainerView>
  );
}
