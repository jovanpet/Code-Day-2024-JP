import { TaskSheet } from '../interfaces/interfaces.tsx';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse, NextRequest } from 'next/server'
import {User} from '../interfaces/interfaces.tsx';
const task_sheet_json =
    '[' +
    '{ "id": 1 , tasks: "[{task_id:1,task_name:\"homework1\",completed:false,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"},{task_id:2,task_name:\"homework2\",completed:true,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"}]"},' +
    '{ "id":2 , tasks: "[{task_id:1,task_name:\"homework1\",completed:false,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"},{task_id:2,task_name:\"homework2\",completed:true,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"}]"} ]';
const tasks = [
        {
            "task_id": 1, "task_name": "homework1", "completed": false, "user_ids": "[{\"id\":1}," +
                "{\"id\":2}]"
        },
        {
            "task_id": 2, "task_name": "homework2", "completed": true, "user_ids": "[{\"id\":1}," +
                "{\"id\":2}]"
        }
    ];
const tasks_string = "[{task_id:1,task_name:\"homework1\",completed:false,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"},{task_id:2,task_name:\"homework2\",completed:true,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"}];";
const users: User[] = [
    { "id": 1, "task_sheet_ids": task_sheet_json, "first_name": "Sponge", "second_name": "Bob", "student": false },
    { "id": 2, "task_sheet_ids": task_sheet_json, "first_name": "Patrick", "second_name": "Star", "student": true }
];

//TODO This Function will be deprecated since we want to do a query here
function findUsersTaskSheets(id: number): string[] {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return [users[i].task_sheet_ids]; //TODO change this end point to pull task info of all these once that endpoint exists
        }
    }
    return []
}

export async function GET(req: NextRequest) {
    const id:string= req.nextUrl.searchParams.get("Id") || "";
    const num_id = parseInt(id);
    if (!id) {
        return NextResponse.json({ error: 'id is required' }, { status: 400 })
    }
    if (Array.isArray(id)) {
        return NextResponse.json({ error: 'name must be a single value' }, { status: 400 })
    }

    const intID = parseInt(id)
    //let taskSheets = findUsersTaskSheets(intID)
    //get user from sample array by index
    let user = users[0]
    if (user=== undefined) {
        return NextResponse.json({ error: 'User with that ID does not exist' }, { status: 400 })
    }
    return NextResponse.json({ user }, { status: 200 });
}