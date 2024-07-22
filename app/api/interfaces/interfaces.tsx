export interface TaskSheet {
    id: number,
    tasks: Task[]
};

export interface Task {
    task_name: string,
    completed: boolean
};