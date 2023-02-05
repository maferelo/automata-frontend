import { CreateReminderModal as CreateReminderModalComponent } from "./CreateReminderModal";

export default {
  component: CreateReminderModalComponent,
};

export function CreateReminderModal(): JSX.Element {
  return (
    <CreateReminderModalComponent
      isOpen={true}
      handleConfirmOnPress={() => {}}
      handleCancelOnPress={() => {}}
    />
  );
}
