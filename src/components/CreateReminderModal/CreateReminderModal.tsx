import { useState } from "react";
import { Modal } from "react-native";

import { AddReminderInput } from "../AddReminderInput";
import { Button } from "../common/Button";
import {
  ConfirmCancelView,
  ContainerView,
  ContentView,
  FormView,
} from "./CreateReminderModal.styles";
import { CreateReminderModalProps } from "./CreateReminderModal.types";

/**
 * CreateReminderModal component.
 * @param isOpen Determine if the modal is open.
 * @param handleConfirmOnPress Handle confirm button press.
 * @param handleCancelOnPress Handle cancel button press.
 */
export function CreateReminderModal({
  isOpen,
  handleConfirmOnPress,
  handleCancelOnPress,
}: CreateReminderModalProps): JSX.Element {
  const [value, onChangeText] = useState("");
  return (
    <Modal visible={isOpen} transparent={true}>
      <ContainerView>
        <ContentView>
          <FormView>
            <AddReminderInput onChange={(text) => onChangeText(text)} />
          </FormView>
          <ConfirmCancelView>
            <Button
              onPress={handleConfirmOnPress}
              label="Confirm"
              variant="primary"
            />
            <Button
              onPress={handleCancelOnPress}
              label="Cancel"
              variant="primary"
            />
          </ConfirmCancelView>
        </ContentView>
      </ContainerView>
    </Modal>
  );
}
