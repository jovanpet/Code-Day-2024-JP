/**
 * @jest-environment node
 */
import { GetUserTimeSheets } from './[id].tsx';


const expected_user_json = "{\"body\":{\"task_sheet_ids\":[{\"id\":1},{\"id\":2}]}}";

it('should return data with status 200', async () => {

    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GetUserTimeSheets(requestObj);


    expect(response.status).toBe(200);
    const body = await response.json();
    expect(JSON.stringify(body)).toEqual(expected_user_json);
});

it('should return error with status 400 when item not found', async () => {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '999' }),
        },
    } as any;

    const response = await GetUserTimeSheets(requestObj);

    expect(response.status).toBe(404);
    const body = await response.json();
    expect(body).toEqual({ error: 'User with that ID does not exist' });
});