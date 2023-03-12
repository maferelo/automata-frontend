import { updateTasks } from "src/slices/task";
import { Tasks } from "src/types";
import { api } from "./index";

const tasks: Tasks = {
  "1": { title: "Task 1", completed: false },
  "2": { title: "Task 2", completed: false },
  "3": { title: "Task 3", completed: false },
  "4": { title: "Task 4", completed: false },
  "5": { title: "Task 5", completed: false },
};

export const getTasks = async (dispatch) => {
  dispatch(updateTasks(tasks));
  const { data } = await api
    .get("/api/tasks")
    .then((response) => {
      console.log("response", response);
      return response;
    })
    .catch((error) => {
      console.log("error", error);
      return error;
    })
    .finally(() => {
      console.log("finally");
    });
  return data;
};
