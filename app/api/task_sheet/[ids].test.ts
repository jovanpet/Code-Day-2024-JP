import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks } from 'node-mocks-http';
import { GET } from './[ids]';
import { TaskSheet } from '../interfaces/interfaces';

let mockTaskSheets: TaskSheet[] = [
    {
        id: 1,
        tasks: '[{"task_id":1,"task_name":"homework1","completed":false,"user_ids":"[{\"id\":1},{\"id\":2}]"},{"task_id":2,"task_name":"homework2","completed":true,"user_ids":"[{\"id\":1},{\"id\":2}]"}]'
    },
    {
        id: 2,
        tasks: '[{"task_id":1,"task_name":"homework1","completed":false,"user_ids":"[{\"id\":1},{\"id\":2}]"},{"task_id":2,"task_name":"homework2","completed":true,"user_ids":"[{\"id\":1},{\"id\":2}]"}]'
    }
];

describe('GET /api/task_sheet', () => {
    it('should return 400 if ids are not provided', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: {}
        });

        await GET(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toEqual({ error: 'ids are required' });
    });

    it('should return 400 if ids are not a comma-separated string', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: { ids: [1,2,3] } // Comma-separated string
        });

        await GET(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toEqual({ error: 'ids must be a comma-separated string' });
    });

    it('should return 400 if any id is not a number', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: { ids: '1,abc' } // Invalid ids
        });

        await GET(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toEqual({ error: 'all ids must be numbers' });
    });

    it('should return 404 if no task sheets are found for provided IDs', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: { ids: '3,4' } // Non-existing ids
        });

        await GET(req, res);

        expect(res.statusCode).toBe(404);
        expect(res._getJSONData()).toEqual({ error: 'No task sheets found for provided IDs' });
    });

    it('should return 200 with task sheets for valid IDs', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: { ids: '1,2' } // Valid ids
        });

        await GET(req, res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual({ taskSheets: mockTaskSheets });
    });
});
