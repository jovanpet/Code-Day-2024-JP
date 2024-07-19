import React from 'react';
import TaskList from './TaskList';
import { TaskSheet } from '@/app/api/interfaces/interfaces';

interface TaskSheetCardProps {
  taskSheet: TaskSheet;
}

const TaskSheetCard: React.FC<TaskSheetCardProps> = ({ taskSheet }) => {
  return (
    <div className="task-sheet-card border p-4 rounded shadow-md mb-4">
      <h2>Task Sheet ID: {taskSheet.id}</h2>
      <TaskList tasks={taskSheet.tasks} />
    </div>
  );
};

export default TaskSheetCard;
