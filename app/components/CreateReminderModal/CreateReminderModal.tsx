import { Modal } from "react-native";

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
  return (
    <Modal visible={isOpen} transparent={true}>
      <ContainerView>
        <ContentView>
          <FormView></FormView>
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
