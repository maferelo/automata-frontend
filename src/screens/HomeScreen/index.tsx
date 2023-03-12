import { TaskList } from "src/components/TaskList";
import { ContainerView } from "./styles";
import { HomeScreenProps } from "./types";

/**
 * HomeScreen component.
 * @param navigation Navigation object.
 * @return HomeScreen component.
 */
export default function HomeScreen({
  navigation,
}: HomeScreenProps): JSX.Element {
  return (
    <ContainerView>
      <TaskList />
    </ContainerView>
  );
}
