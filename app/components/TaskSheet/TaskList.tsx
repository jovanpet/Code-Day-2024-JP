import React from 'react';
import TaskItem from './TaskItem';
import { Task } from '@/app/api/interfaces/interfaces';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Task Name</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map(task => (
          <TaskItem key={task.task_name} task={task} />
        ))}
      </tbody>
    </table>
  );
};

export default TaskList;
