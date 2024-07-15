// Should return all task_sheets student/adult is part of
// request will send you a key (I guess we don't check if key is parent of child) and you will check the columns for student_id and adult_ids and if it’s in it we  return it.

// **Tasks Table**
// | Column | Type | 
// | task_id | integer | 
// | student_id | integer |  
// | adult_ids | json |  
// | task_name | string |


import { TaskSheet } from '../task_sheet/task_sheet';
import { NextApiRequest, NextApiResponse } from 'next';

const task_sheet_json =
    '{ "task_sheet_ids" : [' +
    '{ "id": 1 },' +
    '{ "id":2 } ]}';

const users: User[] = [
    { id: 1, task_sheet_ids: JSON.parse(task_sheet_json), first_name: "Sponge", second_name: "Bob", student: false },
    { id: 2, task_sheet_ids: JSON.parse(task_sheet_json), first_name: "Patrick", second_name: "Star", student: true },
];

//TODO This Function will be deprecated since we want to do a query here
function findUsersTaskSheets(id: number): TaskSheet[] {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            return users[i].task_sheet_ids //TODO change this end point to pull task info of all these once that endpoint exists
        }
    }
    return []
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    switch (req.method) {

        case "GET": {
            const { id } = req.query;

            if (!id) {
                return res.status(400).json({ error: 'id is required' });
            }
            if (Array.isArray(id)) {
                return res.status(400).json({ error: 'Name must be a single value' });
            }

            const intID = parseInt(id)
            let taskSheets = findUsersTaskSheets(intID)

            if (taskSheets.length === 0) {
                return res.status(404).json({ error: 'User with that ID does not exist' })
            }
            return res.status(200).json({ tasks: taskSheets })
        }
    }
    return res.status(400).json({ error: 'Method not supported for the "../user/[id] endpoint"' })
}

export interface User {
    id: number;
    task_sheet_ids: TaskSheet[];
    first_name: string;
    second_name: string;
    student: boolean;
    //TODO Add more properties here, name, email, and everything else that makes sense please.
}
