import { NextApiRequest, NextApiResponse } from "next";
import { TaskSheet } from "../interfaces/interfaces";

// Mock data
const taskSheets: TaskSheet[] = [
    {
        id: 1,
        tasks: JSON.stringify([
            { task_id: 1, task_name: 'Homework', completed: false, user_ids: '[1, 2]' },
            { task_id: 2, task_name: 'Chores', completed: true, user_ids: '[1, 2]' },
        ]),
    },
    {
        id: 2,
        tasks: JSON.stringify([
            { task_id: 3, task_name: 'Shopping', completed: false, user_ids: '[1]' },
            { task_id: 4, task_name: 'Cleaning', completed: true, user_ids: '[2]' },
        ]),
    },
];

// GET function to fetch tasks for a specific TaskSheet
export async function GetTasks(req: NextApiRequest, res: NextApiResponse) {
    const {id} = req. query;

    if (!id) {
        return res.status(400).json({ error: 'TaskSheet ID is required' });
    }

    const taskSheetId = parseInt(id as string);

    if (isNaN(taskSheetId)) {
        return res.status(400).json({ error: 'TaskSheet ID must be a number' });
    }

    const taskSheet = taskSheets.find((sheet) => sheet.id === taskSheetId);

    if (!taskSheet) {
        return res.status(404).json({ error: 'TaskSheet not found' });
    }
    
    const tasks = JSON.parse(taskSheet.tasks);
    return res.status(200).json({ tasks });
}

export default GetTasks;