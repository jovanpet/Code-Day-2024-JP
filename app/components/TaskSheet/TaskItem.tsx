import React from 'react';
import { Task } from '@/app/api/interfaces/interfaces';



interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <tr>
      <td>{task.task_name}</td>
      <td>{task.completed ? 'Yes' : 'No'}</td>
    </tr>
  );
};

export default TaskItem;
