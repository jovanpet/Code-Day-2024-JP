/**
 * @jest-environment node
 */

import { TaskSheet } from '../interfaces/interfaces';
import { getTaskSheetById } from './task_sheet';

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

it('should return data with status 200', async () => {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await getTaskSheetById(requestObj);

    expect(response.status).toBe(200);
    const body = await response.json();
    expect(body).toEqual({ body: taskSheets[0] });
});

it('should return error with status 404 when item not found', async () => {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '999' }),
        },
    } as any;

    const response = await getTaskSheetById(requestObj);

    expect(response.status).toBe(404);
    const body = await response.json();
    expect(body).toEqual({ error: 'Task sheet with that ID does not exist' });
});

it('should return error with status 400 when ID is not provided', async () => {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams(),
        },
    } as any;

    const response = await getTaskSheetById(requestObj);

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'ID parameter is required' });
});