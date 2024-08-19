/**
 * @jest-environment node
 */
import { GET } from './[id]/route';

it('should return data with status 200', async () => {
    const id = 'cm01lzm8q0001q87klw7ka2cb';
    const response = await fetch(`http://localhost:3000/api/task_sheet/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    expect(response.status).toBe(200);
});

it('should return error with status 404 when item not found', async () => {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '999' }),
        },
    } as any;

    const response = await GET(requestObj);

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

    const response = await GET(requestObj);

    expect(response.status).toBe(400);
    const body = await response.json();
    expect(body).toEqual({ error: 'ID parameter is required' });
});