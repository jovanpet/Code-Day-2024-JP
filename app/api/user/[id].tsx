import { NextResponse, NextRequest } from 'next/server';
import {User} from '../interfaces/interfaces.tsx';
const task_sheet_json =
    '[' +
    '{ "id": 1 , tasks: "[{task_id:1,task_name:\"homework1\",completed:false,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"},{task_id:2,task_name:\"homework2\",completed:true,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"}]"},' +
    '{ "id":2 , tasks: "[{task_id:1,task_name:\"homework1\",completed:false,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"},{task_id:2,task_name:\"homework2\",completed:true,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"}]"} ]';

const users: User[] = [
    { "id": 1, "task_sheet_ids": task_sheet_json, "first_name": "Sponge", "second_name": "Bob", "student": false },
    { "id": 2, "task_sheet_ids": task_sheet_json, "first_name": "Patrick", "second_name": "Star", "student": true }
];



export async function GetUserTimeSheets(req: NextRequest) {
    const id:string= req.nextUrl.searchParams.get("Id") || "";
    if (!id) {
        return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }
    if (Array.isArray(id)) {
        return NextResponse.json({ error: 'name must be a single value' }, { status: 400 });
    }
    const num_id = parseInt(id);
    //let taskSheets = findUsersTaskSheets(intID)
    //get user from sample array by index

    //probably should be num_id-1 because the users start with 1 and array starts with 0
    let user = users[num_id];
    if (user=== undefined) {
        return NextResponse.json({ error: 'User with that ID does not exist' }, { status: 404 });
    }
    return NextResponse.json({ user }, { status: 200 });
}