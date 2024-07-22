import { TaskSheet } from '../interfaces/interfaces';
import { NextRequest, NextResponse } from 'next/server';

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

export default function handler(req: NextRequest) {
    const method = req.method;
    switch (method) {
    case 'GET':
        const id = Number(req.nextUrl.searchParams.get('id'));
        const taskSheet = getTaskSheetById(id);
        if (taskSheet) {
            return NextResponse.json(taskSheet, { status: 200 });
        } else {
            return NextResponse.json({ message: `Task sheet with id ${id} not found` }, { status: 404 });
        }
    default:
        return NextResponse.json({ message: `Method ${method} Not Allowed` }, { status: 405 });
    }
};