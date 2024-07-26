import { NextApiRequest, NextApiResponse } from 'next';
import { TaskSheet } from '../interfaces/interfaces.tsx';

const taskSheets: TaskSheet[] = [
    { id: 1, tasks: '[{"task_id":1,"task_name":"homework1","completed":false,"user_ids":"[{\"id\":1},{\"id\":2}]"},{"task_id":2,"task_name":"homework2","completed":true,"user_ids":"[{\"id\":1},{\"id\":2}]"}]' },
    { id: 2, tasks: '[{"task_id":1,"task_name":"homework1","completed":false,"user_ids":"[{\"id\":1},{\"id\":2}]"},{"task_id":2,"task_name":"homework2","completed":true,"user_ids":"[{\"id\":1},{\"id\":2}]"}]' }
];

function findTaskSheetsByIds(ids: number[]): TaskSheet[] {
    return taskSheets.filter(taskSheet => ids.includes(taskSheet.id));
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
    const idsParam = req.query.ids;

    if (!idsParam) {
        return res.status(400).json({ error: 'ids are required' });
    }

    let ids: number[];
    if (typeof idsParam === 'string') {
        ids = idsParam.split(',').map(id => parseInt(id));
    } else {
        return res.status(400).json({ error: 'ids must be a comma-separated string' });
    }

    if (ids.some(isNaN)) {
        return res.status(400).json({ error: 'all ids must be numbers' });
    }

    const taskSheets = findTaskSheetsByIds(ids);

    if (taskSheets.length === 0) {
        return res.status(404).json({ error: 'No task sheets found for provided IDs' });
    }

    return res.status(200).json({ taskSheets });
}
