import { TaskSheet } from '../interfaces/interfaces';
import { NextResponse, NextRequest } from 'next/server';

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
/**
 * Returns the task sheet with the given ID
 * 
 * @param id The ID of the task sheet to get
 * @returns The task sheet with the given ID
 */
const getTaskSheetById = async(req: NextRequest) => {
    const id: string = req.nextUrl.searchParams.get("Id") || "";
    if (!id) {
        return NextResponse.json({ error: 'ID parameter is required' }, { status: 400 });
    }
    if (Array.isArray(id)) {
        return NextResponse.json({ error: 'ID must be a single value' }, { status: 400 });
    }
    const num_id = parseInt(id);

    let taskSheet = taskSheets.find(ts => ts.id === num_id);
    if (taskSheet === undefined) {
        return NextResponse.json({ error: 'Task sheet with that ID does not exist' }, { status: 404 });
    }
    return NextResponse.json({ body: taskSheet }, { status: 200 });
};

export default getTaskSheetById;