export interface TaskSheet {
  id: number,
  tasks: Task[];
};
export interface User {
  id: number;
  task_sheets: TaskSheet[];
  first_name: string;
  second_name: string;
  student: boolean;
}
export interface Task {
  task_name: string;
  completed: boolean;
}