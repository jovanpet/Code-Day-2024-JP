import { TaskSheet } from '../interfaces/interfaces';
import { NextApiRequest, NextApiResponse } from 'next';

// This constant is for testing purposes only, remove when not needed
const taskSheets: TaskSheet[] = [
    {
        id: 1,
        tasks: [
            { task_name: 'Task 1', completed: false },
            { task_name: 'Task 2', completed: false },
            { task_name: 'Task 3', completed: false }
        ]
    },
    {
        id: 2,
        tasks: [
            { task_name: 'Task 4', completed: false },
            { task_name: 'Task 5', completed: false },
            { task_name: 'Task 6', completed: false }
        ]
    },
    {
        id: 3,
        tasks: [
            { task_name: 'Task 7', completed: false },
            { task_name: 'Task 8', completed: false },
            { task_name: 'Task 9', completed: false }
        ]
    }
];

// TODO: Implement this function to use a real API
const getTaskSheetById = (id: number): TaskSheet | undefined => {
    return taskSheets.find(taskSheet => taskSheet.id === id);
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const method = req.method;
    switch (method) {
    case 'GET':
        const id = Number(req.query.id);
        const taskSheet = getTaskSheetById(id);
        if (taskSheet) {
            res.status(200).json(taskSheet);
        } else {
            res.status(404).json({ message: 'Task sheet not found' });
        }
        break;
    default:
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
};