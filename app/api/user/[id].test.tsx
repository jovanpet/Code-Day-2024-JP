/**
 * @jest-environment node
 */
import {GET} from './[id].tsx';
import { createMocks } from 'node-mocks-http';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';


const expected_task_sheet_json = "{\"tasks\":{\"task_sheet_ids\":[{\"id\":1},{\"id\":2}]}}"

it('should return data with status 200', async () => {

    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GET(requestObj);


    expect(response.status).toBe(200);
    expect(JSON.stringify(response.json())).toEqual(expected_task_sheet_json);
});

it('should return error with status 400 when item not found', async () => {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '999' }),
        },
    } as any;

    const response = await GET(requestObj);

    console.log(response)
    expect(response.status).toBe(404);
    expect(response.json()).toEqual({ error: 'User with that ID does not exist' });
});

//TODO add tests checking all the 400 errors

