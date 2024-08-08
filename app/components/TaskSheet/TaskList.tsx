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
                <TaskItem
                    key={task.task_name} // Using task_id as key
                    task={task}
                    onTaskCompletion={() => onTaskCompletion(task.task_name)} // Passing task_id to onTaskCompletion
                />
            ))}
        </ul>
    );
};

export default TaskList;
