/**
 * @jest-environment node
 */
import {GetUserTimeSheets} from './[id].tsx';


const expected_task_sheet_json = "{\"tasks\":{\"task_sheet_ids\":[{\"id\":1},{\"id\":2}]}}";

it('should return data with status 200', async () => {

    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '1' }),
        },
    } as any;

    const response = await GetUserTimeSheets(requestObj);


    expect(response.status).toBe(200);
    expect(JSON.stringify(response.json())).toEqual(expected_task_sheet_json);
});

it('should return error with status 400 when item not found', async () => {
    const requestObj = {
        nextUrl: {
            searchParams: new URLSearchParams({ Id: '999' }),
        },
    } as any;

    const response = await GetUserTimeSheets(requestObj);

    expect(response.status).toBe(404);
    expect(response.json()).toEqual({ error: 'User with that ID does not exist' });
});

//TODO add tests checking all the 400 errors

