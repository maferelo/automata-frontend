import { AddReminder } from "./AddReminder";

export default {
  component: AddReminder,
};

export function Default(): JSX.Element {
  return <AddReminder handleAddReminderOnPress={() => {}} />;
}
