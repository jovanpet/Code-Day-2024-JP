import React from "react";
import TaskItem from "./TaskItem";
import { Task } from "@/app/api/interfaces/interfaces";

interface TaskListProps {
  tasks: Task[];
  onTaskCompletion: (taskName: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onTaskCompletion }) => {
    return (
        <ul>
            {tasks.map(task => (
                <TaskItem key={task.task_name} task={task} onTaskCompletion={onTaskCompletion} />
            ))}
        </ul>
    );
};

export default TaskList;
