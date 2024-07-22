'use client'
import { NextApiRequest, NextApiResponse } from 'next';
import { User } from '../../interfaces/interfaces';
import { Task } from '../../interfaces/interfaces';

// const users_json = 
// "[{\"id\":1},"+
// "{\"id\":2}]";
const tasks = [
    {
        task_id: 1, task_name: "homework1", completed: false, user_ids: "[{\"id\":1}," +
            "{\"id\":2}]"
    },
    {
        task_id: 2, task_name: "homework2", completed: true, user_ids: "[{\"id\":1}," +
            "{\"id\":2}]"
    }
];
const tasks_string = "[{task_id:1,task_name:\"homework1\",completed:false,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"},{task_id:2,task_name:\"homework2\",completed:true,user_ids:\"[{\\\"id\\\":1},\"+\"{\\\"id\\\":2}]\"}];"
//below line not working
//const tasks_json = JSON.parse(tasks_string);
const users: User[] = [
    { id: 1, task_ids: tasks_string, first_name: "Sponge", second_name: "Bob", student: false },
    { id: 2, task_ids: tasks_string, first_name: "Patrick", second_name: "Star", student: true },
];

//function will used with sql query

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].id == id) {
//             return users[i].task_sheet_ids; //TODO change this end point to pull task info of all these once that endpoint exists
//         }
//     }
//     return []
// }

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     switch (req.method) {

//         case "GET": {
//             const { id } = req.query;

//             if (!id) {
//                 return res.status(400).json({ error: 'id is required' });
//             }
//             if (Array.isArray(id)) {
//                 return res.status(400).json({ error: 'Name must be a single value' });
//             }

//             const intID = parseInt(id)
//             //let taskSheets = findUsersTaskSheets(intID)
//             let foundTasks = [tasks[0]]
//             if (foundTasks.length === 0) {
//                 return res.status(404).json({ error: 'User with that ID does not exist' })
//             }
//             return res.status(200).json({ tasks: foundTasks })
//         }
//     }
//     return res.status(400).json({ error: 'Method not supported for the "../user/[id] endpoint"' })
// }



export default function userHandler(
    req: NextApiRequest,
    res: NextApiResponse<Task>,
) {
    const { query, method } = req;
    console.log(req);
    // const id = parseInt(query.id as string, 10);
    // const name = query.name as string;
    const id = 1
    const name = "test"

    switch (method) {
        case "GET":
            // Get data from your database
            res.status(200).json({ task_id: id, task_name: `Task ${id}`, completed: false, user_ids: "" });
            break;
        case "PUT":
            // Update or create data in your database

            //TODO
            res.status(200).json({ task_id: id, task_name: name || `Task ${id}`, completed: false, user_ids: "" });
            break;
        default:
            console.log(res);
            res.setHeader("Allow", ["GET", "PUT"]);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}
