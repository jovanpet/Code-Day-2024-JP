import React from 'react';
import Link from 'next/link';
import { TaskSheet } from '@/app/api/interfaces/interfaces';

interface TaskSheetCardProps {
  taskSheet: TaskSheet;
}

const TaskSheetCard: React.FC<TaskSheetCardProps> = ({ taskSheet }) => {
    return (
        <div className="task-sheet-card border p-4 rounded shadow-md mb-4">
            <h2>Task Sheet ID: {taskSheet.id}</h2>
            <Link href={`/task-sheet/${taskSheet.id}`}>
                <a>View Tasks</a>
            </Link>
        </div>
    );
};

export default TaskSheetCard;
