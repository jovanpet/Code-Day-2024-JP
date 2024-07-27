/**
 * @jest-environment node
 */
import {GetUserTimeSheets} from './[id].tsx';


const expected_user_json =  "{\"user\":{\"id\":2,\"task_sheet_ids\":\"[{ \\\"id\\\": 1 , tasks: \\\"[{task_id:1,task_name:\\\"homework1\\\",completed:false,user_ids:\\\"[{\\\\\\\"id\\\\\\\":1},\\\"+\\\"{\\\\\\\"id\\\\\\\":2}]\\\"},{task_id:2,task_name:\\\"homework2\\\",completed:true,user_ids:\\\"[{\\\\\\\"id\\\\\\\":1},\\\"+\\\"{\\\\\\\"id\\\\\\\":2}]\\\"}]\\\"},{ \\\"id\\\":2 , tasks: \\\"[{task_id:1,task_name:\\\"homework1\\\",completed:false,user_ids:\\\"[{\\\\\\\"id\\\\\\\":1},\\\"+\\\"{\\\\\\\"id\\\\\\\":2}]\\\"},{task_id:2,task_name:\\\"homework2\\\",completed:true,user_ids:\\\"[{\\\\\\\"id\\\\\\\":1},\\\"+\\\"{\\\\\\\"id\\\\\\\":2}]\\\"}]\\\"} ]\",\"first_name\":\"Patrick\",\"second_name\":\"Star\",\"student\":true}}";
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

//TODO add tests checking all the 400 errors