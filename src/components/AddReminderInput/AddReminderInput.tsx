import { useState } from "react";

import { ContainerView, ReminderTextInput } from "./AddReminderInput.styles";
import { AddReminderInputProps } from "./AddReminderInput.types";

/**
 * AddReminderInput component.
 * @param handleAddReminderChange Function to handle add reminder changes.
 * @return AddReminderInput component.
 **/
export function AddReminderInput({
  onChange,
}: AddReminderInputProps): JSX.Element {
  const [value, setValue] = useState("");

  return (
    <ContainerView>
      <ReminderTextInput
        value={value}
        onChangeText={(text: string): void => {
          setValue(text);
          onChange(text);
        }}
      />
    </ContainerView>
  );
}
