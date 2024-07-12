// Should return all task_sheets student/adult is part of
// request will send you a key (I guess we don't check if key is parent of child) and you will check the columns for student_id and adult_ids and if it’s in it we  return it.

// **Tasks Table**
// | Column | Type | 
// | task_id | integer | 
// | student_id | integer |  
// | adult_ids | json |  
// | task_name | string |


import { NextResponse, NextRequest } from 'next/server';

const adults_json = '{ "adult_ids" : [' +
'{ "id": 1 },' +
'{ "id":2 } ]}'; 

const tasks: Task[] = [
    { task_id: 1, student_id: 1, adult_ids: adults_json, task_name: "homework1"},
    { task_id: 2, student_id: 2 , adult_ids: adults_json,task_name: "homework2"}
];

function findTasks(id: number, tasks_local: Task[]): Task[] {
    var foundTasks: Task[] = [];


    for (let i = 0; i < tasks_local.length; i++) {
        let adults_object = JSON.parse(tasks_local[i].adult_ids);

        // Function to check if a number exists in the array
        const checkIdExists = (idToCheck: number) => {
            return adults_object.adult_ids.some((item: { id: number }) => item.id === idToCheck);
        };
        if (tasks_local[i].student_id === id || checkIdExists(id)) {
            foundTasks[i] = tasks_local[i]
        }
    }
    return (foundTasks);
}

export async function GET(req: NextRequest) {

    // const obj = JSON.parse(text);
    const Id =  req.nextUrl.searchParams.get('Id');

    if (!Id) {
        return NextResponse.json({ error: 'Student/Parent Id is required' }, { status: 400 });
      }
    const intID = parseInt(Id)
    let foundTasks = findTasks(intID, tasks);

    if (foundTasks.length ===0) {
        return NextResponse.json({ error: 'Item not found' }, { status: 404 });
    }
    console.log(foundTasks)
    return NextResponse.json(foundTasks, { status: 200 });
}

export interface Task {
    task_id: number;
    student_id: number;
    adult_ids: string; // gets returned as parsed JSON string
    task_name:string;
}