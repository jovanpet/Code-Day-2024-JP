import React from 'react';

interface TaskSheetCardProps{
    taskSheet: {
        id: number;
        name: string;
        description: string;
        tasks: Array<any>;
    };
}


const TaskSheetCard: React.FC<TaskSheetCardProps> = ({taskSheet}) => {
    return (
        <div className="task-sheet-card border p-4 rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">{taskSheet.name}</h3>
            <p className="mb-2">{taskSheet.description}</p>
            <p>Number of Tasks: {taskSheet.tasks.length}</p>
        </div>
    );
};

export default TaskSheetCard;