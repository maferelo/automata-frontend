import { AddReminder as AddReminderComponent } from "./AddReminder";

export default {
  component: AddReminderComponent,
};

export function AddReminder(): JSX.Element {
  return <AddReminderComponent handleAddReminderOnPress={() => {}} />;
}
