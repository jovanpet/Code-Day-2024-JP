import { NextApiRequest, NextApiResponse } from 'next';
import { TaskSheet } from '../interfaces/interfaces';

// Mock data
const taskSheets: TaskSheet[] = [
    {
        id: 1,
        tasks: [
            { task_name: 'Homework', completed: false },
            { task_name: 'Chores', completed: true },
        ],
    },
    {
        id: 2,
        tasks: [
            { task_name: 'Shopping', completed: false },
            { task_name: 'Cleaning', completed: true },
        ],
    },
];

// GET function to fetch tasks for a specific TaskSheet
export async function GetTasks(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;

    if (!id) {
        return res.status(400).json({ error: 'TaskSheet ID is required' });
    }

    const taskSheetId = parseInt(id as string);

    if (isNaN(taskSheetId)) {
        return res.status(400).json({ error: 'TaskSheet ID must be a number' });
    }

    const taskSheet = taskSheets.find(sheet => sheet.id === taskSheetId);

    if (!taskSheet) {
        return res.status(404).json({ error: 'TaskSheet not found' });
    }

    return res.status(200).json({ tasks: taskSheet.tasks });
}

export default GetTasks;
