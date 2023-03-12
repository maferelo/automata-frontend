export type TaskData = {
  title: string;
  completed: boolean;
};

export type Tasks = {
  [tasks: string]: TaskData;
};
