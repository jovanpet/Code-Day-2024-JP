import { createMocks } from 'node-mocks-http';
import { GET } from './[id]';
import { NextApiRequest, NextApiResponse } from 'next';

describe('GET /api/tasksheet/[id]', () => {
    it('should return 400 if TaskSheet ID is not provided', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: {},
        });

        await GET(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toEqual({ error: 'TaskSheet ID is required' });
    });

    it('should return 400 if TaskSheet ID is not a number', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: { id: 'abc' },
        });

        await GET(req, res);

        expect(res.statusCode).toBe(400);
        expect(res._getJSONData()).toEqual({ error: 'TaskSheet ID must be a number' });
    });

    it('should return 404 if TaskSheet is not found', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: { id: '999' },
        });

        await GET(req, res);

        expect(res.statusCode).toBe(404);
        expect(res._getJSONData()).toEqual({ error: 'TaskSheet not found' });
    });

    it('should return 200 with tasks for valid TaskSheet ID', async () => {
        const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
            method: 'GET',
            query: { id: '1' },
        });

        await GET(req, res);

        expect(res.statusCode).toBe(200);
        expect(res._getJSONData()).toEqual({
            tasks: [
                { task_id: 1, task_name: 'Homework', completed: false, user_ids: '[1, 2]' },
                { task_id: 2, task_name: 'Chores', completed: true, user_ids: '[1, 2]' },
            ],
        });
    });
});
