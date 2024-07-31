import { NextResponse, NextRequest } from 'next/server';
import { User } from '../interfaces/interfaces.tsx';
const task_sheet_json =
    '{ "task_sheet_ids" : [' +
    '{ "id": 1 },' +
    '{ "id":2 } ]}';
const users: User[] = [
    { "id": 1, "task_sheets": JSON.parse(task_sheet_json), "first_name": "Sponge", "second_name": "Bob", "student": false },
    { "id": 2, "task_sheets": JSON.parse(task_sheet_json), "first_name": "Patrick", "second_name": "Star", "student": true }
];

export async function GetUserTimeSheets(req: NextRequest) {
    const id: string = req.nextUrl.searchParams.get("Id") || "";
    if (!id) {
        return NextResponse.json({ error: 'id is required' }, { status: 400 });
    }
    if (Array.isArray(id)) {
        return NextResponse.json({ error: 'name must be a single value' }, { status: 400 });
    }
    const num_id = parseInt(id);

    let user = users[num_id];
    if (user === undefined) {
        return NextResponse.json({ error: 'User with that ID does not exist' }, { status: 404 });
    }
    let body = user.task_sheets;
    return NextResponse.json({ body }, { status: 200 });
}