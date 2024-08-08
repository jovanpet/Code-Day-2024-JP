import React from 'react';
import { Task } from '@/app/api/interfaces/interfaces';

interface TaskItemProps {
  task: Task;
  onTaskCompletion: () => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onTaskCompletion }) => {
    return (
        <li>
            <label>
                <input 
                    type="checkbox" 
                    checked={task.completed} 
                    onChange={() => onTaskCompletion()} 
                />
                {task.task_name}
            </label>
        </li>
    );
};

export default TaskItem;
