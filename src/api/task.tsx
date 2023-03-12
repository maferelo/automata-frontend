import axios from "axios";
import { updateTasks } from "src/slices/task";
import { Tasks } from "src/types";

const tasks: Tasks = {
  "1": { title: "Task 1", completed: false },
  "2": { title: "Task 2", completed: false },
  "3": { title: "Task 3", completed: false },
  "4": { title: "Task 4", completed: false },
  "5": { title: "Task 5", completed: false },
};

export const getTasks = async (dispatch) => {
  dispatch(updateTasks(tasks));
  const { data } = await axios.get("/api/tasks");
  return data;
};
