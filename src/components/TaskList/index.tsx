import { useSelector } from "react-redux";
import { Task } from "src/components/Task";
import { Tasks } from "src/types";
import { ContainerFlatList } from "./styles";

/**
 * HomeScreen component.
 * @param navigation Navigation object.
 * @return HomeScreen component.
 */
export function TaskList(): JSX.Element {
  const tasks: Tasks = useSelector((state: any) => state.task.tasks);
  const renderTask = ({ item }) => {
    return <Task id={item} data={tasks[item]} />;
  };
  console.log("tasks", tasks);
  return (
    <ContainerFlatList
      data={Object.keys(tasks)}
      renderItem={renderTask}
      keyExtractor={(item: string) => item}
    />
  );
}
