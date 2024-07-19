import React from 'react';
import TaskSheetCard from './TaskSheetCard';
import { TaskSheet } from '@/app/api/interfaces/interfaces';

interface TaskSheetListProps {
  taskSheets: TaskSheet[];
}

const TaskSheetList: React.FC<TaskSheetListProps> = ({ taskSheets }) => {
  return (
    <div className="task-sheet-list">
      {taskSheets.map(taskSheet => (
        <TaskSheetCard key={taskSheet.id} taskSheet={taskSheet} />
      ))}
    </div>
  );
};

export default TaskSheetList;
